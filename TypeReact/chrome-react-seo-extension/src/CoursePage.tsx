import {useParams} from 'react-router-dom';
import * as React from 'react';

function CoursePage() {
  const {userId, course} = useParams();
  return (
    <div>
        <h1 className="text-indigo-600 m-12">{userId} {course}</h1>
    </div>
  );
}

export default CoursePage;