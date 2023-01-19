import db from '../db/dbConfig.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import CustomAPIError from '../errors/custom-error.js';
import { StatusCodes } from 'http-status-codes';

export const allPosts = async (req, res) => {};
export const createPost = async (req, res) => {};
export const allMyPosts = async (req, res) => {};
export const onePost = async (req, res) => {};
export const editPost = async (req, res) => {};
export const deletePost = async (req, res) => {};
