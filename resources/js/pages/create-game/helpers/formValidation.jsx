export default (fields) => {
    const errors = {};

    const { title, description } = fields;

    if (title.length <= 2 || title.length > 190) {
        errors['title'] = 'Title invalid';
    }

    if (description.length <= 8 || description.length > 500) {
        errors['description'] = 'Description invalid';
    }

    return errors;
}