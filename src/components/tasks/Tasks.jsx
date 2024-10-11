import { useState } from 'react';
import { Button, Box, Grid, IconButton, Grid2 } from '@mui/material';
import { Add, Fullscreen, Remove } from '@mui/icons-material';
import styles from '../tasks/tasks.module.scss';


export const Tasks = ({ tasks }) => {
    const [taskStats, setTaskStats] = useState({
        completed: tasks?.completed || 0,
        in_job: tasks?.in_job || 0,
        expired: tasks?.expired || 0,
    });

    const handleIncrement = (field) => {
        setTaskStats((prevStats) => ({
            ...prevStats,
            [field]: prevStats[field] + 1,
        }));
    };

    const handleDecrement = (field) => {
        setTaskStats((prevStats) => ({
            ...prevStats,
            [field]: Math.max(prevStats[field] - 1, 0),
        }));
    };

    return (
        <div className={styles.profile}>
            <div className={styles.title}>Статистика по задачам</div>
            <Box mt={2} sx={{
                maxWidth: {
                    xs: '100%', sm: 200
                }
            }
            }>
                <Grid2 container
                    rowSpacing={{ sm: 0, md: 1 }} columnSpacing={{ sm: 2, md: 3 }}>
                    <Grid2 size={12} sx={{ width: { xs: '100%' } }}>
                        <div className={styles.cell}>
                            <div className={styles.key}>Выполнено</div>
                            <div className={styles.value}>
                                <IconButton onClick={() => handleDecrement('completed')}>
                                    <Remove />
                                </IconButton>
                                {taskStats.completed}
                                <IconButton onClick={() => handleIncrement('completed')}>
                                    <Add />
                                </IconButton>
                            </div>
                        </div>
                    </Grid2>

                    <Grid2 size={12} sx={{ width: { xs: '100%' } }}>
                        <div className={styles.cell}>
                            <div className={styles.key}>В работе</div>
                            <div className={styles.value}>
                                <IconButton onClick={() => handleDecrement('in_job')}>
                                    <Remove />
                                </IconButton>
                                {taskStats.in_job}
                                <IconButton onClick={() => handleIncrement('in_job')}>
                                    <Add />
                                </IconButton>
                            </div>
                        </div>
                    </Grid2>

                    <Grid2 size={12} sx={{ width: { xs: '100%' } }}>
                        <div className={styles.cell}>
                            <div className={styles.key}>Просрочены</div>
                            <div className={styles.value}>
                                <IconButton onClick={() => handleDecrement('expired')}>
                                    <Remove />
                                </IconButton>
                                {taskStats.expired}
                                <IconButton onClick={() => handleIncrement('expired')}>
                                    <Add />
                                </IconButton>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Box>
        </div>
    );
};