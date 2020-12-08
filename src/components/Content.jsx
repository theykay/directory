import React from "react";
import Table from "react-bootstrap/Table";
import "./content.css";

function Content(props) {
  function compare(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === "string") ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === "string") ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varB > varA) {
        comparison = -1;
      }

      return (
        (order === "desc") ? (comparison * -1) : comparison
      );
    }
  };
  
  let employees = props.employees;
  
  function clickit(event) {
    event.preventDefault();
    // let key = event.target.value;
    console.log(event.target.children[1].value)
    const field = event.target.children[1].value;
    const order = event.target.children[2].value;
    employees = props.employees.sort(compare(field, order));
  }

  return (
    <>
    <form
      onSubmit={clickit}  
    >
      <label>Sort by:</label>
      <select name="keys" id="keys">
        <option value="name.first">First Name</option>
        <option value="name.last">Last Name</option>
        <option value="dob.date">Birthday</option>
      </select>
      <select>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button type="submit">organize</button>
    </form>
      <Table responsive>
        <thead>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(person => (
            <tr key={person.id}>
              <td className="picture"><img src={person.picture.thumbnail} alt="employee name" /></td>
              <td className="firstName">{person.name.first}</td>
              <td className="lastName">{person.name.last}</td>
              <td className="email">{person.email}</td>
              <td className="phone">{person.phone}</td>
              <td className="birthday">{person.dob.month} {person.dob.day}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </>
  )
}

export default Content;