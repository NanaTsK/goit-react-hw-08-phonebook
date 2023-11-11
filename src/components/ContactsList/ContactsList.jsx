import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/thunks';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { selectFilter } from 'redux/filter/selectors';
import { NotFoundNotification } from 'components/Notification/NotFoundNotification';
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = async (id, name) => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`${name} deleted!`);
    } catch (error) {
      toast.error(`Something went wrong. Error: ${error}.`);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: '40px 0',
      }}
    >
      <Typography
        variant="h5"
        mb={'10px'}
        sx={{ textAlign: 'center', fontWeight: '600', opacity: '0.6' }}
      >
        Contacts
      </Typography>
      <Filter />
      {isLoading && <Loader />}

      {!isLoading && visibleContacts.length > 0 && (
        <Stack spacing={2}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Card
                key={id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.light',
                  }}
                >
                  {name?.at(0)?.toUpperCase()}
                </Avatar>
                <Typography variant="body">
                  {name}: {number}
                </Typography>
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="error"
                  onClick={() => {
                    handleDeleteContact(id, name);
                  }}
                >
                  <DeleteTwoToneIcon fontSize="inherit" />
                </IconButton>
              </Card>
            );
          })}
        </Stack>
      )}

      {!error && !isLoading && contacts.length === 0 && (
        <Notification>Your contact list is empty!</Notification>
      )}

      {filter && !isLoading && visibleContacts.length === 0 && (
        <NotFoundNotification>
          "{filter}" is not in your contact list.
        </NotFoundNotification>
      )}
    </Box>
  );
};
