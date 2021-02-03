import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import './index.css';

function Table() {
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start</th>
            <th>Stop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>1.55</td>
            <td>2.55</td>
          </tr>
          <tr class="bg-emerald-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>8.55</td>
            <td>9.77</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>4.55</td>
            <td>5.98</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
