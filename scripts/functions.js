export function addStudent(student) {
    $('<a>')
        .appendTo('#students-list')
        .attr('href', '')
        .addClass('list-group-item')
        .text(`${student.firstname} ${student.lastname}`)
        .attr('data-id', student.id);
}

export function fillEditForm(response, id) {
    for (let key in response) {
        $('#form-edit-student')
        .find(`[name="${key}"]`)
        .val(response[key]);
    }

    $('#form-edit-student')
        .find(`[name="id"]`)
        .val(id);

    $('#btn-delete')
        .attr('data-id', id)
}

