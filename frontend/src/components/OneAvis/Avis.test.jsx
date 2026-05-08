import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
import OneAvis from "../OneAvis/OneAvis.jsx";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => (key === "common.supprimer" ? "Supprimer" : key),
  }),
}));

describe("Composant OneAvis", () => {
  it("appelle onDelete quand on clique sur supprimer", () => {
    // Arrange
    const props = {
      id: "123",
      description: "Super pizza !",
      creatorName: "Thien-Kim",
      creatorId: "user_1",
      onDelete: vi.fn(),
    };

    const mockAuth = {
      isLoggedIn: true,
      userId: "user_1",
    };

    render(
      <AuthContext.Provider value={mockAuth}>
        <OneAvis {...props} />
      </AuthContext.Provider>,
    );

    // Act
    const bouton = screen.getByText("Supprimer");
    fireEvent.click(bouton);

    // Assert
    expect(bouton).toBeTruthy();
    expect(props.onDelete).toHaveBeenCalledWith("123");
  });

  it("affiche la description de l'avis", () => {
    // Arrange
    const desc = "Le service était rapide";

    // Act
    render(
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <OneAvis description={desc} />
      </AuthContext.Provider>,
    );

    // Assert
    const element = screen.getByText(`"${desc}"`);
    expect(element).toBeTruthy();
  });

  it("ne doit pas afficher le bouton supprimer si l'utilisateur n'est pas le créateur", () => {
    // Arrange
    const props = {
      id: "123",
      description: "Yummy!!",
      creatorId: "utilisateur_A",
    };

    const mockAuthDiff = {
      isLoggedIn: true,
      userId: "utilisateur_B",
    };

    // Act
    render(
      <AuthContext.Provider value={mockAuthDiff}>
        <OneAvis {...props} />
      </AuthContext.Provider>,
    );

    // Assert
    const bouton = screen.queryByText("Supprimer");
    expect(bouton).toBeFalsy();
  });
});
