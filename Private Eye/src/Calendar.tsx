import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

interface InterviewEvent {
  id: number;
  company: string;
  position: string;
  time: string;
  date: Date;
}

const InterviewCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [interviewEvents, setInterviewEvents] = useState<InterviewEvent[]>([]);

  // Updated onDateChange callback with correct type signature:
  const onDateChange = (
    value: Date | Date[] | null,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setShowForm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const company = formData.get('company') as string;
    const position = formData.get('position') as string;
    const time = formData.get('time') as string;

    if (selectedDate) {
      const newEvent: InterviewEvent = {
        id: Date.now(),
        company,
        position,
        time,
        date: selectedDate,
      };
      setInterviewEvents([...interviewEvents, newEvent]);
      setShowForm(false);
      form.reset();
    }
  };

  return (
    <div className="interview-calendar">
      <h2>Interview Calendar</h2>
      <ReactCalendar onChange={onDateChange} />
      {showForm && selectedDate && (
        <div className="interview-form">
          <h3>Add Interview for {selectedDate.toLocaleDateString()}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Company:
                <input type="text" name="company" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Position:
                <input type="text" name="position" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Time:
                <input type="time" name="time" required />
              </label>
            </div>
            <div className="form-actions">
              <button type="submit">Add Interview</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="events-list">
        <h3>Scheduled Interviews</h3>
        {interviewEvents.length === 0 ? (
          <p>No interviews scheduled.</p>
        ) : (
          <ul>
            {interviewEvents.map((event) => (
              <li key={event.id}>
                {event.date.toLocaleDateString()} - {event.company} for {event.position} at {event.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InterviewCalendar;