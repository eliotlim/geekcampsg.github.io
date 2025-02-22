import React, { useState } from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import Layout from "../components/layout"
import Header from "../components/header"
import { Schedule, ScheduleItem } from "../components/Schedule"

import Event2020 from "../../data/archive/2020"
import Event2019 from "../../data/archive/2019"
import Event2018Plus from "../../data/archive/2018"
import Event2017 from "../../data/archive/2017"

dayjs.extend(utc)
dayjs.extend(timezone)

const events = [
  ["GeekcampSG 2020", Event2020],
  ["GeekcampSG 2019", Event2019],
  ["GeekcampSG 2018+", Event2018Plus],
  ["GeekcampSG 2017", Event2017],
]

const SideLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.333333333rem;

  li:hover {
    color: var(--blue);
    cursor: pointer;
  }

  li.is-active {
    color: var(--green);
  }
`

const EventTitle = styled.h3`
  font-size: 2.222222222rem;
  margin: 0.5rem 0 0;
  border-top: 2px solid var(--yellow);
  padding-top: 1rem;
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    border-top: none;
  }
`

const EventDate = styled.div`
  font-size: 1.777777778rem;
  margin-bottom: 3rem;
`

const TalkVideo = styled.a`
  color: var(--green);
  font-size: 1.333333333rem;
  font-weight: 400;
`

const PastEvents = () => {
  const [event, setEvent] = useState(Event2019)

  return (
    <Layout>
      <div className="contain">
        <Header />
      </div>
      <section className="section-past-events">
        <div className="contain">
          <div className="vessel cols" style={{ marginTop: "2rem" }}>
            <div className="left">
              <h2>Past Events</h2>
              <SideLinks>
                {events.map((evt) => {
                  return (
                    <li
                      className={event === evt[1] ? "is-active" : null}
                      onClick={() => setEvent(evt[1])}
                      key={evt[0]}
                    >
                      {evt[0]}
                    </li>
                  )
                })}
              </SideLinks>
            </div>
            <div className="right">
              <EventTitle>GeekcampSG {event.year}</EventTitle>
              {event.dates.map((evtDate) => {
                  const dateFmt = dayjs(evtDate.date).tz(evtDate.timeZone).format("dddd, D MMMM YYYY")
                  return (
                    <React.Fragment key={evtDate.date}>
                      <EventDate>{dateFmt}</EventDate>
                      <Schedule>
                        {evtDate.talks && evtDate.talks.map((talk) => {
                          return (
                            <ScheduleItem key={talk.title}>
                              <h3>
                                {talk.title}{" "}
                                {talk.video ? (
                                  <TalkVideo
                                    href={talk.video}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    Video
                                  </TalkVideo>
                                ) : null}
                              </h3>
                              <h4>{talk.speaker}</h4>
                              <p>{talk.summary}</p>
                            </ScheduleItem>
                          )
                        })}
                    </Schedule>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PastEvents
