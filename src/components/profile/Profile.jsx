import { Button, Grid2, TextField } from '@mui/material';
import styles from './profile.module.scss';

export const Profile = ({ editableUser, handleChange, handleSave }) => {

    return (
        <div className={styles.profile}>
            <Grid2 container rowSpacing={{ xs: 0, md: 1 }} columnSpacing={{ xs: 2, md: 3 }}>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        label="Имя"
                        name="fullName"
                        value={editableUser.fullName}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        label="Почта"
                        name="email"
                        value={editableUser.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        label="Должность"
                        name="post"
                        value={editableUser.post}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        label="Адрес"
                        name="address"
                        value={editableUser.address}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Пол"
                        name="gender"
                        value={editableUser.gender}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Возраст"
                        name="age"
                        value={editableUser.age}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Зарплата"
                        name="salary"
                        value={editableUser.salary}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Дата рождения"
                        name="dateOfBirth"
                        value={editableUser.dateOfBirth}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type='phone'
                        label="Телефон"
                        name="phone"
                        value={editableUser.phone}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Телеграм"
                        name="telegram"
                        value={editableUser.telegram}
                        onChange={handleChange}
                        margin="normal"
                    />
                </Grid2>

            </Grid2>
            <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleSave}>
                Сохранить изменения
            </Button>

        </div>

    );
};