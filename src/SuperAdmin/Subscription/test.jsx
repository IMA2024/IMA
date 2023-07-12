import React, { useState } from 'react';
import { Table } from '@mantine/core';

function FeedbackForm() {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const website = event.target.website.value;
    const gender = event.target.gender.value;
    const comment = event.target.comment.value;

    const newFeedback = {
      name,
      email,
      website,
      gender,
      comment,
    };

    setFeedbackList((prevList) => [...prevList, newFeedback]);

    event.target.reset();
  };

  const handleEdit = (index) => {
    const feedback = feedbackList[index];
    document.getElementById('name').value = feedback.name;
    document.getElementById('email').value = feedback.email;
    document.getElementById('website').value = feedback.website;

    if (feedback.gender === 'Female') {
      document.getElementById('Female').checked = true;
    } else if (feedback.gender === 'Male') {
      document.getElementById('Male').checked = true;
    } else {
      document.getElementById('Other').checked = true;
    }

    document.getElementById('comment').value = feedback.comment;
  };

  return (
    <>
      <form id="frm1" name="frm" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Feedback Form</legend>
          <label>
            Name: <input type="text" name="name" id="name" />
          </label>
          <br />
          <br />
          <label>
            E-mail: <input type="text" name="email" id="email" />
          </label>
          <br />
          <br />
          <label>
            Website: <input type="text" name="website" id="website" />
          </label>
          <br />
          <br />
          <label>
            Gender:
            <div id="radio">
              <input type="radio" name="gender" value="Female" id="Female" />Female
              <input type="radio" name="gender" value="Male" id="Male" />Male
              <input type="radio" name="gender" value="Other" id="Other" />Other
            </div>
          </label>
          <br />
          <br />
          <label>
            Comment: <textarea name="comment" rows="5" cols="40" id="comment"></textarea>
          </label>
          <br />
          <br />
          <input type="submit" name="submit" value="Submit" />
        </fieldset>
      </form>

      <div id="items_table">
        <h2>Feedback List</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Gender</th>
              <th>Comment</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.website}</td>
                <td>{feedback.gender}</td>
                <td>{feedback.comment}</td>
                <td>
                  <input
                    type="radio"
                    name="feedback"
                    onClick={() => handleEdit(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br />
        <label>
          <input type="button" value="Edit" onClick={handleEdit} />
          * Edit Selected item
        </label>
      </div>
    </>
  );
}

export default FeedbackForm;
