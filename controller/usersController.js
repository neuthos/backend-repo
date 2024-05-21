import User from "../models/userModel";
import {db} from "../utils/firebase";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import successHandler from "../middleware/successHandler";
import ApiError from "../entities/ApiError";

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    await addDoc(collection(db, "users"), data);
    return successHandler(res, "User created successfully", 201, null);
  } catch (error) {
    throw new ApiError(400, error.message, {});
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await getDocs(collection(db, "users"));
    const userArray = [];

    if (users.empty) throw new ApiError(404, "No Users found", {});

    for (const userDoc of users.docs) {
      const user = new User(
        userDoc.id,
        userDoc.data().name,
        userDoc.data().email,
        userDoc.data().password,
        userDoc.data().age,
        userDoc.data().bio,
        userDoc.data().ethnicity,
        userDoc.data().height,
        userDoc.data().location,
        userDoc.data().availability,
        userDoc.data().services
      );
      userArray.push(user);
    }

    return successHandler(res, "Users retrieved successfully", 200, userArray);
  } catch (error) {
    throw new ApiError(400, error.message, error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = doc(db, "users", id);
    const data = await getDoc(user);

    if (!data.exists()) throw new ApiError(404, "User not found", {});

    return successHandler(res, "User retrieved successfully", 200, data.data());
  } catch (error) {
    throw new ApiError(400, error.message, {});
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = doc(db, "users", id);
    await updateDoc(product, data);
    return successHandler(res, "User updated successfully", 200, null);
  } catch (error) {
    throw new ApiError(400, error.message, error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "users", id));
    return successHandler(res, "User deleted successfully", 200, null);
  } catch (error) {
    throw new ApiError(400, error.message, error);
  }
};
