// src/routes/router.js

import { Router } from 'express';
import { UserDetailsBookform } from '../models/bodyPart.js';
import { validateInput } from '../middlewares/validationMiddleware.js';

const createRouter = () => {
  const router = Router();

  // Common function to handle saving user details
  const saveUserDetails = async (req, res, UserDetailsModel) => {
    try {
      const user = new UserDetailsModel(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error saving user details:', error);
      res.status(500).json({ error: error.message });
    }
  };

  // Endpoint for user details from bookform
  router.post('/user-details-bookform', validateInput, async (req, res) => {
    await saveUserDetails(req, res, UserDetailsBookform);
  });

  return router;
};

export default createRouter;
