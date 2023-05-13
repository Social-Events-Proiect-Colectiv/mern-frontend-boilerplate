import React from 'react';

const Sidebar = () => {
  // Handle filter change
  const handleFilterChange = (event) => {
    // Do something with the selected filter
    const selectedFilter = event.target.value;
    // ...
  };

  return (
    <div className="sticky-sidebar" style={{ height: '50vh', width: '200px' , marginTop: '200px'}}>
      <h3>Event Filter</h3>
      <div className="filter-option">
        <label>
          <input type="radio" name="filter" value="all" onChange={handleFilterChange} />
          All Events
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input type="radio" name="filter" value="upcoming" onChange={handleFilterChange} />
          Upcoming Events
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input type="radio" name="filter" value="past" onChange={handleFilterChange} />
          Past Events
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input type="radio" name="filter" value="free" onChange={handleFilterChange} />
          Free Events
        </label>
      </div>
      <div className="filter-option">
        <label>
          <input type="radio" name="filter" value="paid" onChange={handleFilterChange} />
          Paid Events
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
