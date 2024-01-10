import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
import { container } from "./reusable.styled";

class List extends Component {
  render() {
    const { isCourseinBag, handleAdd, handleRemove } = this.props;
    return (
      <container flex="3">
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isInBag={isCourseinBag(v.id)}
          />
        ))}
      </container>
    );
  }
}

export default List;