import { param, body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const runValidationResult = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, errors: errors.array() });
    return;  // Stop further execution, do NOT return res directly
  }
  next();
};

export const validateGetUserById = [
  param('id').isInt({ gt: 0 }).withMessage('id must be a positive integer'),
  runValidationResult
];

export const validateGetUserPosts = [
  param('id').isInt({ gt: 0 }).withMessage('id must be a positive integer'),
  runValidationResult
];

export const validateUpdatePost = [
  param('userId').isInt({ gt: 0 }).withMessage('userId must be a positive integer'),
  param('postId').isInt({ gt: 0 }).withMessage('postId must be a positive integer'),
  body('title').optional().isString().withMessage('title must be a string'),
  body('content').optional().isString().withMessage('content must be a string'),
  runValidationResult
];

export const validateDeletePost = [
  param('userId').isInt({ gt: 0 }).withMessage('userId must be a positive integer'),
  param('postId').isInt({ gt: 0 }).withMessage('postId must be a positive integer'),
  runValidationResult
];
