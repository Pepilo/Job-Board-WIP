import express from "express";
import { entrepriseRoutes, recruteurRoutes, candidatRoutes, annonceRoutes, candidatureRoutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use('/entreprise', entrepriseRoutes);
app.use('/recruteur', recruteurRoutes);
app.use('/candidat', candidatRoutes);
app.use('/annonce', annonceRoutes);
app.use('/candidature', candidatureRoutes);