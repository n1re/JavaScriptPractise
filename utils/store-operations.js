const removeIfExists = (id, store) => {
    const index = store.indexOf(id);
    const exists = index !== -1;

    exists && store.splice(index, 1);
};
//@todo write assert