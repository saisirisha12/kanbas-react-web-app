export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br></br><br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea rows={9} cols={44} id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignmentsLink to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <br />
        <tr>
          <td align="right" valign="top" >
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" >
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
                <option value="Assigments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" >
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
                <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" >
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
                <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top"></td>
            <td align="justify" valign="top">
                <label>Online Entry options</label><br/>

                <input type="checkbox" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" >
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td valign="top" >
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input id="wd-assign-to" value={100} />
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top" ></td>
          <td valign="top" >
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
          <input type="date"
                id="wd-due-date"
                value="2024-06-05"/>
          </td>
        </tr>
        <br/>
        <tr>
            <td></td>
            <td><label htmlFor="wd-available-from">Available from<td /><td/><td/><td/></label> <label htmlFor="wd-available-until">Until</label></td><br/>
        </tr>
        <tr>
            <td/>
          <td><input type="date" id="wd-available-from" value="2024-06-05"/> <input type="date" id="wd-available-until" value="2024-06-05"/></td>
        </tr>
      </table>
      <hr/>
      <table width="100%">
        <tr>
            <td align="right" valign="top" >
            <button>Cancel</button> <button>Save</button></td>
        </tr>
      </table>
    </div>
);}
  