// const authController = {
//   register: (req, res) => {
//     try {
//       const {email, password} = req.body;
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           // Signed in
//           var user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log(error);
//         });
//       res.redirect("/");
//     } catch (e) {
//       res.redirect("register");
//     }
//   },
//   login: () => {},
// };

// module.exports = authController;
