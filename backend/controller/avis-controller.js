import HttpError from '../util/http-error.js';
import { Avis } from '../models/avis.js';
import { User } from '../models/users.js';
import { validationResult } from 'express-validator';

export const createdAvis = async (req, res, next) => {
    const userId = req.userData.userId;

    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        return next( new HttpError('Données saisies invalides, veuillez bien vérifier..', 422));
    }

    const { description } = req.body;

    const createdAvis = new Avis({
        description,
        owner : userId
    });

    let user;

    try {
        user = await User.findById(userId);
    } catch (e) {
        console.log(e);
        const err = new HttpError('Une erreur BD est survenue', 500);
        return next(err);
    }

    if(!user) {
        const err = new HttpError('Utilisateur non trouvé', 404);
        return next(err);
    }

    try {
        await createdAvis.save();
        user.avis.push(createdAvis);
        await user.save();
    } catch (e) {
        console.log(e.message);
        const err = new HttpError('Création dans la BD échouée..', 500);
        return next(err);
    }

    res.status(201).json({ avis: createdAvis });
};

const getAvis = async (req, res, next) => {
    let avis;

    try {
        avis = await Avis.find().populate('owner', '-password');
    } catch (e) {
        console.log(e);
        const err = new HttpError('Erreur BD est arrivé..', 500);
        return next(err);
    }

    res.json({
        avis : avis.map((avis) => avis.toObject({ getters : true })),
    });
};

const getAvisById = async (req, res, next) => {
    const avisId = req.params.aid;

    let avis;

    try {
        avis = await Avis.findById(avisId);
    } catch (e) {
        console.log(e);
        const err = new HttpError('Erreur BD est arrivé..', 500);
        return next(err);
    }

    res.json({
        avis : avis.toObject({ getters : true })
    });
};

const deleteAvis = async (req, res, next) => {
    const avisId = req.params.aid;

    try {
        const avis = await Avis.findById(avisId).populate('owner');
        if (!avis) {
            return res.status(404).json({ message : "Le avis n'est pas trouvé.." });
        }

        await avis.deleteOne();

        avis.owner.avis.pull(avis._id);
        await avis.owner.save();

        res.status(200).json({ message : 'Le avis a été supprimé.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message : 'Erreur a eu lieu lorsque le avis a été supprimer..' })
    }
};

export default {
    createdAvis,
    getAvis,
    getAvisById,
    deleteAvis,
};