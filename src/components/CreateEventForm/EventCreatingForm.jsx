const EventCreatingForm = () => {
  return (
    <>
      {/* old Form */}
      {/* update Form */}
      <div className="max-w-7xl py-10 mx-auto">
        <h2 className="text-3xl py-8 px-12 font-semibold">Create Your Event</h2>
        <form onSubmit={formHandler} className="space-y-10 pt-6 px-12">
          {/* Title */}
          <div className="flex w-full mx-auto">
            <label className="w-2/12" htmlFor="">
              <h2 className="font-medium">Your event title</h2>
            </label>
            <InputField
              className="border outline-none  p-2 rounded-md  w-6/12"
              type="text"
              name="eventTitle"
              placeholder={"Late Night Meeting"}
              required
            />
          </div>
          {/* Duration */}
          <div className="flex w-full mx-auto">
            <label className="w-2/12" htmlFor="">
              <h2 className="font-medium">Duration</h2>
            </label>
            <select
              defaultValue=""
              name="eventDuration"
              className="select select-bordered  p-2 rounded-md w-6/12"
              onChange={(e) => setEventDuration(e.target.value)}
              required
            >
              <option disabled value="">
                Select Duration
              </option>
              {generateDurationOptions()}
            </select>
          </div>
          {/* date from */}
          <div className="flex w-full mx-auto">
            <label className="w-2/12" htmlFor="">
              <h2 className="font-medium">
                Select a Date
                <br />
                <span className="text-sm font-normal text-gray-400">{`(From)`}</span>
              </h2>
            </label>
            <div className="flex gap-6 justify-center items-center w-6/12">
              <InputField
                className="border outline-none  p-2 rounded-md w-6/12"
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
              <h2 className="font-medium">To</h2>
              <InputField
                className="border outline-none  p-2 rounded-md  w-6/12"
                type="date"
                name="toDate"
                onChange={(e) => setToDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* time slot */}
          <div className="w-full space-y-10 mx-auto">
            {fromDate && toDate
              ? getDatesInRange(fromDate, toDate).map((date, index) => (
                  <div key={index} className="flex w-full mx-auto">
                    <label className="w-2/12" htmlFor="">
                      <h2 className="font-medium">
                        Select Time Slot
                        <br />
                        <p className="text-sm font-normal text-gray-400">{`Date: ${date.toLocaleDateString()} (${getDayOfWeek(
                          date
                        )})`}</p>
                      </h2>
                    </label>

                    {/* Dropdown for time slots based on selected event duration */}
                    {eventDuration && (
                      <select
                        defaultValue=""
                        name="timeSlot"
                        className="select select-bordered  p-2 rounded-md w-6/12"
                        required
                      >
                        <option disabled value="">
                          Select Time Slot
                        </option>
                        {generateTimeSlots(eventDuration).map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))
              : "Please select dates"}
          </div>

          {/* Event Location */}
          <div className="flex   w-full mx-auto">
            <label className="w-2/12" htmlFor="">
              <h2 className="font-medium">Event Location</h2>
            </label>
            <select
              className="select select-bordered p-1.5 rounded-md w-6/12"
              onChange={eHandle}
              name="location"
              value={location}
              required
              // defaultValue="default"
            >
              <option value="" disabled>
                Select Your Location
              </option>
              <option value={"meet"}>Google Meet</option>
              <option value={"zoom"}>Zoom</option>
            </select>
          </div>
          {/* Booking Form */}
          <div className="flex   w-full mx-auto">
            <label className="w-2/12" htmlFor="">
              <h2 className="font-medium">
                Booking Form <br />
                <span className="text-sm font-normal text-gray-400">
                  create meeting link
                </span>
              </h2>
            </label>
            <div className="flex justify-between items-center gap-2 w-6/12">
              <InputField
                className={`border outline-none  p-2 rounded-md  ${
                  location ? "w-5/6" : "w-full"
                }`}
                type="text"
                name="meetingLink"
                placeholder={"https://meet.example.com/late-night-meet"}
                required
              />
              {location === "zoom" ? (
                <Link
                  className="w-1/6 border flex justify-center items-center border-purple-500 p-2 text-blue-500"
                  href="https://zoom.us/"
                  target="_blank"
                >
                  Create
                </Link>
              ) : (
                ""
              )}

              {location === "meet" ? (
                <Link
                  className="w-1/6 border flex justify-center items-center border-purple-500 p-2 text-blue-500"
                  href="https://meet.google.com/ "
                  target="_blank"
                >
                  Create
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Button */}
          <hr className="w-8/12" />
          <div>
            <button
              type="submit"
              className="border border-purple-500 text-purple-500 hover:text-black px-4 py-2 font-medium rounded"
            >
              <span>{isPending ? "pending...." : "Confirm Event"}</span>
            </button>
          </div>
        </form>
      </div>
      {/* old Form */}
      <div className="my-10">
        <form onSubmit={formHandler}>
          <div className={`${next1 ? "hidden" : "block"} spacey-y-10`}>
            {/* EVENT TITLE */}

            <div className="">
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Event Title
                </span>
              </label>
              <p className="text-sm">
                Make A simple Title To Remember Your Event
              </p>
              <InputField
                className="md:w-[380px] outline-none h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
                type="text"
                name="eventTitle"
                required
              />
              {/* <input
              className="md:w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
              type="text"
              name="eventTitle"
              required
            /> */}
            </div>

            {/* EVENT DURATION */}
            <div className="">
              <div className="space-y-3 my-7">
                <label className="label">
                  <span className="label-text font-semibold text-black text-xl">
                    Duration (minutes)
                  </span>
                </label>
                <p className="text-sm">
                  Setup the duration, capacity, and optional pricing of your
                  meetings.
                </p>
                <select
                  defaultValue=""
                  name="eventDuration"
                  className="select select-bordered w-full  md:w-[380px] "
                  onChange={(e) => setEventDuration(e.target.value)}
                  required
                >
                  <option disabled value="">
                    Select Duration
                  </option>
                  {generateDurationOptions()}
                </select>
              </div>
            </div>

            <div className="my-6  ">
              {/* AVAILABLE DAYS */}
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Daily availability
                </span>
              </label>
              <p className="text-sm">Set your availability during the week.</p>

              <div className="">
                {/* AVAILABLE DAYS AND TIMES */}

                <div className=" "></div>
                {/* first time ends */}
              </div>

              <div className="flex md:flex-row flex-col gap-3 items-center">
                {/* FIRST FREE DAY */}

                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold text-black text-xl">
                      Pick Your Free Days (From)
                    </span>
                  </label>
                  <p className="text-sm">Make some Time For Your Meeting</p>
                  <InputField
                    className="w-[230px] outline-none border-slate-400 h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
                    type="date"
                    name="fromDate"
                    onChange={(e) => setFromDate(e.target.value)}
                    required
                  />
                  {/* <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              /> */}
                </div>
                {/* FIRST FREE DAY  */}

                {/* SECOND FREE DAY  */}
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold text-black text-xl">
                      Pick Your Free Days (To)
                    </span>
                  </label>
                  <p className="text-sm">Make some Time For Your Meeting</p>
                  <InputField
                    className="w-[230px] outline-none  h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
                    type="date"
                    name="toDate"
                    onChange={(e) => setToDate(e.target.value)}
                    required
                  />

                  {/* <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="toDate"
                onChange={(e) => setToDate(e.target.value)}
                required
              /> */}
                </div>

                {/* SECOND FREE DAY  */}
              </div>
              {/* set time for each day */}
              <div>
                <label className="label-text font-semibold text-black text-xl">
                  Selected Date Range
                </label>
                <div className="text-sm space-y-3 my-3">
                  {fromDate && toDate
                    ? getDatesInRange(fromDate, toDate).map((date, index) => (
                        <div key={index} className="flex items-center">
                          <p>{`Date: ${date.toLocaleDateString()} (${getDayOfWeek(
                            date
                          )})`}</p>

                          {/* Dropdown for time slots based on selected event duration */}
                          {eventDuration && (
                            <label className="ml-4">
                              <span className="label-text font-semibold text-black text-xl">
                                Select Time Slot
                              </span>
                              <select
                                defaultValue=""
                                name="timeSlot"
                                className="select select-bordered w-full"
                                required
                              >
                                <option disabled value="">
                                  Select Time Slot
                                </option>
                                {generateTimeSlots(eventDuration).map(
                                  (slot, index) => (
                                    <option key={index} value={slot}>
                                      {slot}
                                    </option>
                                  )
                                )}
                              </select>
                            </label>
                          )}
                        </div>
                      ))
                    : "Please select dates"}
                </div>
              </div>

              {/* location */}

              <div className="">
                <label className="label">
                  <span className="label-text font-semibold text-black text-xl">
                    Event Location
                  </span>
                </label>
                <select
                  className="select select-bordered select-xl w-[250px] my-3 max-w-xs"
                  onChange={eHandle}
                  name="location"
                  value={location}
                  required
                  // defaultValue="default"
                >
                  <option value="" disabled>
                    Select Your Location
                  </option>
                  <option value={"meet"}>Google Meet</option>
                  <option value={"zoom"}>Zoom</option>
                </select>
              </div>
              {/* meeting link */}
              <div className="space-y-5">
                <div className="">
                  <label className="label">
                    <span className="label-text font-semibold text-black text-xl">
                      Booking Form
                    </span>
                  </label>
                  <p className="text-sm">Create Your Meeting link</p>
                  <InputField
                    className="w-[380px] outline-none  h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
                    type="text"
                    name="meetingLink"
                    required
                  />

                  {/* <input
                className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="text"
                name="meetingLink"
                required
              /> */}
                  {location === "zoom" ? (
                    <Link
                      className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                      href="https://zoom.us/"
                      target="_blank"
                    >
                      Create Zoom Link
                    </Link>
                  ) : (
                    ""
                  )}

                  {location === "meet" ? (
                    <Link
                      className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                      href="https://meet.google.com/ "
                      target="_blank"
                    >
                      Create Meet Link
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {/* create event button */}
            <div className="">
              <button className="border-2 text-xl text-sky-700 w-[230px] rounded-md h-[45px] border-pink-300 hover:before:bg-pink-300 before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">
                Confirm Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EventCreatingForm;
