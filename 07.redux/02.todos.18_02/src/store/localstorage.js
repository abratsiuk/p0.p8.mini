export const loadData = () => {
    try {
        let data = localStorage.getItem('todos');
        if (data === null) {
            return undefined;
        }
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const saveData = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
        console.error(error);
    }
};
