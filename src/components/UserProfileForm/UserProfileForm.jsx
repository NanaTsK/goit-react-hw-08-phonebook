// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser, updateProfile } from 'redux/auth';
// import { Box, Button, TextField } from '@mui/material';
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
// import { teal } from '@mui/material/colors';

// import toast from 'react-hot-toast';

// export const UserProfileForm = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//   });

//   const handleChange = field => event => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: event.target.value,
//     }));
//   };

//   const handleUpdateProfile = async e => {
//     e.preventDefault();

//     try {
//       await dispatch(updateProfile(formData)).unwrap();
//       toast.success('Profile updated successfully!');
//     } catch (error) {
//       toast.error(`Error updating profile: ${error}`);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': {
//           marginTop: '10px',
//           width: '100%',
//         },
//       }}
//       noValidate
//       onSubmit={handleUpdateProfile}
//     >
//       <TextField
//         required
//         label="Name"
//         placeholder="🧑   Alex Alex"
//         value={formData.name}
//         onChange={handleChange('name')}
//       />
//       <TextField
//         required
//         label="Email"
//         placeholder="✉️   email@example.com"
//         type="email"
//         value={formData.email}
//         onChange={handleChange('email')}
//       />
//       <Button
//         variant="outlined"
//         type="submit"
//         size="large"
//         sx={{
//           color: teal[700],
//           borderColor: teal[700],
//         }}
//         startIcon={<PersonAddAlt1Icon />}
//       >
//         Update Profile
//       </Button>
//     </Box>
//   );
// };
