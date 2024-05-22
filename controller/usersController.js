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

export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = doc(db, "users", id);
    const data = await getDoc(user);

    if (!data.exists()) throw new ApiError(404, "User not found", {});

    return successHandler(res, "User retrieved successfully", 200, data.data());
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const data = req.body;

    // Check if email already exists
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((doc) => doc.data());
    const existingUser = users.find((user) => user.email === data.email);

    if (existingUser) {
      throw new ApiError(400, "Email already exists", {});
    }

    // Check if age is above 18
    if (data.age < 18) {
      throw new ApiError(400, "Age must be above 18", {});
    }

    const newUser = await addDoc(collection(db, "users"), data);

    const userDoc = doc(db, "users", newUser.id);
    const user = await getDoc(userDoc);

    return successHandler(res, "User created successfully", 201, {
      id: newUser.id,
      ...user.data(),
    });
  } catch (error) {
    next(error);
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
        userDoc.data().bio
      );
      userArray.push(user);
    }

    return successHandler(res, "Users retrieved successfully", 200, userArray);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    // Check if email already exists
    const users = await getDocs(collection(db, "users"));
    const userArray = [];

    for (const userDoc of users.docs) {
      const user = new User(
        userDoc.id,
        userDoc.data().name,
        userDoc.data().email,
        userDoc.data().age
      );
      userArray.push(user);
    }

    const existingUser = userArray.find((user) => user.email === data.email);

    if (existingUser && existingUser.id !== id) {
      throw new ApiError(400, "Email already exists", {});
    }

    // Check if age is above 18
    if (data.age < 18) {
      throw new ApiError(400, "Age must be above 18", {});
    }

    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, data);

    const updatedUser = await getDoc(userDoc);

    return successHandler(res, "User updated successfully", 200, {
      id,
      ...updatedUser.data(),
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "users", id));
    return successHandler(res, "User deleted successfully", 200, null);
  } catch (error) {
    next(error);
  }
};
