export const getSampleData = (data, count) => {
    if (data.length <= count) return data;
    const step = Math.floor(data.length / (count - 1));
    return data.filter((_, index) => index % step === 0).slice(0, count);
};