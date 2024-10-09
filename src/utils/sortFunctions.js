export const countEyeColors = (users) => {
    const eyeColors = ["Ореховый", "Зелёный", "Серый", "Голубой", "Карий"];
    return eyeColors.map((color) => ({
        subject: color,
        A: users.filter(user => user.eyeColor === color).length
    }));
};

export const getGenderData = (users) => {
    return users.reduce(
        (acc, user) => {
            if (user.gender === 'Женский') {
                acc.female += 1;
            } else {
                acc.male += 1;
            }
            return acc;
        },
        { male: 0, female: 0 }
    );
}

export const getTasksData = (users) => {
    return users.reduce(
        (acc, user) => {
            acc.completed += user.tasks.completed;
            acc.inJob += user.tasks.in_job;
            acc.expired += user.tasks.expired;
            return acc;
        },
        { completed: 0, inJob: 0, expired: 0 }
    );
}

export const getAgeData = (users) => {
    const data = [
        { name: '18-25 лет', value: 0, color: "#FFBB28" },
        { name: '26-35 лет', value: 0, color: "#33B3D3" },
        { name: '36-45 лет', value: 0, color: "#6FCC86" },
        { name: '46+ лет', value: 0, color: "#FF8042" }
    ];

    users.forEach((user) => {
        if (user?.age >= 18 && user?.age <= 25) data[0].value++;
        else if (user?.age >= 26 && user?.age <= 35) data[1].value++;
        else if (user?.age >= 36 && user?.age <= 45) data[2].value++;
        else if (user?.age >= 46) data[3].value++;
    });

    return data;
}

export const getTopUsers = (users) => {
    let topUsers = [...users];
    return topUsers.sort((a, b) => b?.tasks?.completed - a?.tasks?.completed).slice(0, 7);
}