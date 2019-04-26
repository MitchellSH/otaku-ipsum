import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <svg id="dango" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 466.3"><title>dango</title><path d="M306.2,230.3l4.5-4.6a7.4,7.4,0,0,0,0-10.6,7.5,7.5,0,0,0-10.6,0l-4.5,4.6a7.4,7.4,0,0,0,0,10.6,7.7,7.7,0,0,0,5.3,2.2A7.9,7.9,0,0,0,306.2,230.3Z" transform="translate(0 -22.8)"/><path d="M251.2,175.3l4.5-4.6a7.4,7.4,0,0,0,0-10.6,7.5,7.5,0,0,0-10.6,0l-4.5,4.6a7.4,7.4,0,0,0,0,10.6,7.7,7.7,0,0,0,5.3,2.2A7.9,7.9,0,0,0,251.2,175.3Z" transform="translate(0 -22.8)"/><path d="M504.7,240.4a74.5,74.5,0,0,0-38.8-36.6,7.5,7.5,0,0,0-9.8,4.2,7.4,7.4,0,0,0,4.1,9.7A59,59,0,0,1,493.6,292a58.6,58.6,0,0,1-30.1,33.6l-3.1,1.4a2.9,2.9,0,0,1-3.3-1c-3.3-5.2-2.6-10.7-1-21.8v-.9c1.8-11.8-5.1-48-31.7-63.4-12.4-7.2-12.8-16.7-12.3-20.4l.2-.3a58.7,58.7,0,0,1,21.6-5.7,7.5,7.5,0,1,0-1-15,75.7,75.7,0,0,0-27.1,7.2,15.5,15.5,0,0,0-8.4,10.7,69.1,69.1,0,0,0-28.6,54.4,66.5,66.5,0,0,0-19.1-10.3,68.9,68.9,0,0,0-32.4-3.3,82.4,82.4,0,0,0,9.1-7.7,73.9,73.9,0,0,0,21.7-52.6,76.4,76.4,0,0,0-4-24.3,74.3,74.3,0,0,0,62.1-6.2l2.8.2a18.5,18.5,0,0,0,12.3-4.6l3.3-3.2A79.7,79.7,0,1,0,312,46.2a16.1,16.1,0,0,0-4.5,13.7,74.3,74.3,0,0,0-9.3,66.8A74.6,74.6,0,0,0,204,171.6a7.5,7.5,0,0,0,14.1,5.1A58.1,58.1,0,0,1,232,155a59.3,59.3,0,1,1,0,83.9h0a59,59,0,0,1-17-34.8,7.4,7.4,0,0,0-8.3-6.6,7.6,7.6,0,0,0-6.6,8.4,78,78,0,0,0,3.5,15.2,75.3,75.3,0,0,0-24.2-4,74.4,74.4,0,0,0-74.3,74.3,74.9,74.9,0,0,0,8.2,34.1L4.9,433.9a16.8,16.8,0,0,0,0,23.7l6.3,6.3a15.9,15.9,0,0,0,1.6,6.4l4.7,9.7A16,16,0,0,0,32,489.2a15.5,15.5,0,0,0,6.9-1.6l127-60.9a69,69,0,0,0,14.7,11.6,7.6,7.6,0,0,0,3.8,1.1,7.5,7.5,0,0,0,6.5-3.7,7.6,7.6,0,0,0-2.6-10.3A53.8,53.8,0,0,1,173.9,413l-.5-.6a50.2,50.2,0,0,1-6.3-10.1,54.3,54.3,0,0,1-3.2-38.2,72.2,72.2,0,0,0,15.5,1.7A74.2,74.2,0,0,0,232,344a78.7,78.7,0,0,0,10-12.4A54.1,54.1,0,0,1,214.5,433a7.5,7.5,0,0,0-.4,15h1.7A69.1,69.1,0,0,0,281,401.8a65.2,65.2,0,0,0,3.9-21.3A66.5,66.5,0,0,0,304,390.8a67.9,67.9,0,0,0,52.8-2.9,68.9,68.9,0,0,0,39.1-60.7,70.2,70.2,0,0,0,42.2,14.3,71.8,71.8,0,0,0,13.1-1.3,17.7,17.7,0,0,0,8.2,2,18.9,18.9,0,0,0,6.6-1.3l4-1.8a74,74,0,0,0,34.7-98.7ZM322.7,56.7a64.7,64.7,0,0,1,91.4,0,64.8,64.8,0,0,1,0,91.5l-2.7,2.5a3.6,3.6,0,0,1-4.5.2c-5.4-4.2-6.8-10.5-9.1-22.3l-.2-.9c-2.4-12.2-22.8-47-54.8-53-14-2.6-18.5-10.8-20-15.4v-.2a11.1,11.1,0,0,1-.3-1.3A1.1,1.1,0,0,1,322.7,56.7Zm3.8,87.7A59.5,59.5,0,0,1,315.3,76c5.8,6.7,14.3,11.5,24.7,13.4,24.9,4.7,41.3,33.2,42.9,41.2l.2.9c1.9,9.7,3.6,18.3,8.9,25.4A59.4,59.4,0,0,1,326.5,144.4ZM25.1,455.9a1.8,1.8,0,0,1-1.3-.6L15.5,447a1.8,1.8,0,0,1-.5-1.3,1.7,1.7,0,0,1,.5-1.2L121.7,338.3a75.8,75.8,0,0,0,10.9,10.8L26.4,455.3A1.7,1.7,0,0,1,25.1,455.9Zm122.3-68L85.2,417.7l60.2-60.2,4.2,2A68.3,68.3,0,0,0,147.4,387.9Zm-115,86.2a1.1,1.1,0,0,1-1.4-.5l-1.6-3.3a17.3,17.3,0,0,0,7.6-4.4l16.2-16.2L151,402.8c.8,2,1.6,4,2.6,6s1.9,3.8,3,5.7Zm200-155.9c-.1.1-.2.2-.2.3a59.1,59.1,0,0,1-52.8,32.3,57.1,57.1,0,0,1-17.5-2.7l-.9-.3a55.2,55.2,0,0,1-12.6-5.8l-.4-.3a55.6,55.6,0,0,1-10.5-8.3,60.5,60.5,0,0,1-8.4-10.5l-.3-.5a59.3,59.3,0,1,1,103.6-4.2Zm29.3-15.5a72,72,0,0,0-3.9,21.3,76.7,76.7,0,0,0-9-5.8,75.5,75.5,0,0,0,.9-51,75.2,75.2,0,0,0,35.8,3.1A69.2,69.2,0,0,0,261.7,302.7Zm88.6,71.7a54.1,54.1,0,1,1-23.4-102.9,55.2,55.2,0,0,1,17.9,3.1,54.1,54.1,0,0,1,5.5,99.8Zm91.1-73.2v.8c-1.3,8.8-2.5,16.7-.3,24.4a54.1,54.1,0,0,1-41.3-92.2c3.1,7.4,9,13.9,17.2,18.7C437,264.5,442.3,294.7,441.4,301.2Z" transform="translate(0 -22.8)"/><path d="M266.4,182.9a7.6,7.6,0,0,0-8,7,21.3,21.3,0,0,0,6.2,16.4,20.8,20.8,0,0,0,14.9,6.2h1.4a7.5,7.5,0,0,0,7-8,7.6,7.6,0,0,0-8-7,5.9,5.9,0,0,1-4.7-1.7,6.2,6.2,0,0,1-1.8-4.8A7.5,7.5,0,0,0,266.4,182.9Z" transform="translate(0 -22.8)"/></svg>
      <svg id="octopus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 446.1">
        <path className="cls-1"
              d="M340.1,196.4a7.4,7.4,0,0,0-7.5,7.5v14.3a7.5,7.5,0,0,0,15,0V203.9A7.5,7.5,0,0,0,340.1,196.4Z"
              transform="translate(0 -32.9)"/>
        <path className="cls-1"
              d="M507,262a46.4,46.4,0,0,0-51.5-24.5l-10.2,2.1c-4.8.9-9.8,1.6-14.9,2.3a164.7,164.7,0,0,0,2.8-29h.6a38.7,38.7,0,0,0,27.5-66.1,77.4,77.4,0,0,0-17.4-12.4,21.2,21.2,0,0,0-.5-4.4,61.7,61.7,0,0,0,6.9-5.8A38.8,38.8,0,0,0,422.9,58a38.9,38.9,0,0,0-27.5,11.4,81.2,81.2,0,0,0-12.2,17.3A177.1,177.1,0,0,0,163.5,59,7.4,7.4,0,0,0,161,69.3a7.6,7.6,0,0,0,10.3,2.5,162.1,162.1,0,0,1,207.8,32.7c.2.2.3.4.5.5l4.5,5.6H127.9a171.5,171.5,0,0,1,17.2-18.9,7.5,7.5,0,1,0-10.2-10.9,173.1,173.1,0,0,0-25.5,29.8H94a24.5,24.5,0,0,0-7.6,47.8,176.8,176.8,0,0,0-4.8,83.5c-5.1-.7-10.1-1.4-14.9-2.3l-10.2-2.1a46.5,46.5,0,0,0-54.1,60,41.5,41.5,0,0,0,4.7,10,29.7,29.7,0,0,0-2.5,11.8A30.4,30.4,0,0,0,35,349.6a30,30,0,0,0,24.7-12.8l4.4,1.1a46.4,46.4,0,0,0,12.6,86.8,30.3,30.3,0,0,0,59-9.9,38.9,38.9,0,0,0-.4-4.9l10.9-5.9-3.4,6.6a46.5,46.5,0,0,0,65.1,61.7,29.7,29.7,0,0,0,13.2,3A30.3,30.3,0,0,0,251.4,445a29.7,29.7,0,0,0-7-19.3c4.3-8.5,8.1-17.2,11.6-26,3.5,8.8,7.3,17.5,11.6,26a29.7,29.7,0,0,0-7,19.3,30.3,30.3,0,0,0,30.3,30.3,30,30,0,0,0,13.2-3,46.1,46.1,0,0,0,22.1,6.7h2.1a46.5,46.5,0,0,0,40.9-68.5c-1.2-2.2-2.3-4.4-3.4-6.6,3.7,2.1,7.3,4.1,10.9,5.9a38.9,38.9,0,0,0-.4,4.9,30.3,30.3,0,0,0,58.9,10,47.7,47.7,0,0,0,16.1-6.4,46.6,46.6,0,0,0-3.4-80.5l4.4-1.1A30,30,0,0,0,477,349.6a30.3,30.3,0,0,0,30.3-30.3,29.6,29.6,0,0,0-2.4-11.8A46.4,46.4,0,0,0,507,262ZM450.7,157.4a23.9,23.9,0,0,1,0,33.6,24.1,24.1,0,0,1-17.9,6.9,178.4,178.4,0,0,0-7.1-39.1,25.1,25.1,0,0,0,13.8-9.6A62.6,62.6,0,0,1,450.7,157.4ZM406.1,80a23.4,23.4,0,0,1,16.8-7,23.7,23.7,0,0,1,23.7,23.8,23.4,23.4,0,0,1-6.9,16.8,33.4,33.4,0,0,1-3.8,3.3,24.6,24.6,0,0,0-16.4-6.3H402.6c-2.8-4.1-5.7-8.1-8.8-11.9C397.5,91,402.1,83.9,406.1,80Zm-24.5,45.6h37.9a9.5,9.5,0,0,1,9.5,9.5,11,11,0,0,1-.2,1.8h-.1a9.5,9.5,0,0,1-9.2,7.6H362.6Zm-104.6,0h83.4l-19,19H258Zm-106.4,0h85.2l-19,19H151.6Zm-86.1,9.5a9.5,9.5,0,0,1,9.5-9.5h55.4l-19,19H94A9.6,9.6,0,0,1,84.5,135.1ZM35,334.6a15.4,15.4,0,0,1-15.3-13.7,43.6,43.6,0,0,0,5.9,3.5,133.2,133.2,0,0,0,18,7.6A15.3,15.3,0,0,1,35,334.6ZM32.3,311a32.3,32.3,0,0,1-10.5-8.5l-.3-.4a31.6,31.6,0,0,1-3.1-33.4,31.5,31.5,0,0,1,34.8-16.6c3.6.8,7.2,1.6,10.8,2.2,6.8,1.3,13.9,2.3,21.1,3.2a175.2,175.2,0,0,0,24.5,52.6l-1,.8a187.7,187.7,0,0,1-23.5,15.7C64,323.4,46.7,318.3,32.3,311Zm73.1,119.1a15.2,15.2,0,0,1-11.5-5.2l1.8-.4a148.9,148.9,0,0,0,24.9-7.9A15.4,15.4,0,0,1,105.4,430.1Zm34.1-39.5c-17.2,9.8-32.1,15.9-47,19.3A31.6,31.6,0,0,1,71.3,351l9.7-4.9,9.4-5.2h0a222.3,222.3,0,0,0,27.5-18.2l.7-.6a175.9,175.9,0,0,0,44.9,39.4c-2.1,6.3-4.3,12.4-6.6,18.4C150.9,383.8,145.2,387.3,139.5,390.6Zm81.9,69.7a149.9,149.9,0,0,0,14.4-19.4,14,14,0,0,1,.6,4.1A15.4,15.4,0,0,1,221.4,460.3ZM275.6,445a14,14,0,0,1,.6-4.1,149.9,149.9,0,0,0,14.4,19.4A15.4,15.4,0,0,1,275.6,445Zm73.9,10.8a31.7,31.7,0,0,1-40.6,1.7c0-.1,0-.1-.1-.1l-3.8-3.5-2.7-3c-15.9-17.8-26.5-40.8-35.1-63.8a176.9,176.9,0,0,0,68-18.3A300.8,300.8,0,0,0,351,407.9c1.6,3.3,3.3,6.6,5,9.8A31.5,31.5,0,0,1,349.5,455.8Zm57.1-25.7a15.4,15.4,0,0,1-15.2-13.5,146.1,146.1,0,0,0,24.9,7.9l1.8.4A15.2,15.2,0,0,1,406.6,430.1ZM457.1,386a31.4,31.4,0,0,1-28.2,24.5h-.4a34.5,34.5,0,0,1-9-.7c-14.9-3.4-29.8-9.5-47-19.3-5.6-3.3-11.5-6.9-17.4-10.7-2.3-6-4.5-12.1-6.6-18.5l1.2-.7a177.3,177.3,0,0,0,43.7-38.6l.7.6a228.4,228.4,0,0,0,27.4,18.2h.1l9.4,5.2,9.7,4.9A31.5,31.5,0,0,1,457.1,386ZM477,334.6a15.3,15.3,0,0,1-8.6-2.6,133.2,133.2,0,0,0,18-7.6,43.6,43.6,0,0,0,5.9-3.5A15.5,15.5,0,0,1,477,334.6Zm18.4-41.8a31.9,31.9,0,0,1-4.9,9.3l-.3.4a31.6,31.6,0,0,1-10.6,8.5c-14.4,7.3-31.7,12.4-52.7,15.6a187.7,187.7,0,0,1-23.5-15.7l-1-.8a168.1,168.1,0,0,0,11.5-19.2,7.5,7.5,0,1,0-13.4-6.8,160.3,160.3,0,0,1-14,22.5h0a2.4,2.4,0,0,0-.6.9A161.6,161.6,0,0,1,336.8,351l-1.8,1a161.7,161.7,0,0,1-79,20.5,169,169,0,0,1-24.7-1.9,7.5,7.5,0,1,0-2.2,14.8c5.2.8,10.4,1.4,15.7,1.7-8.6,23-19.2,46-35,63.7l-2.8,3.1a41.4,41.4,0,0,1-3.8,3.5h-.1A31.5,31.5,0,0,1,156,417.7c1.7-3.2,3.4-6.5,5-9.8a300.8,300.8,0,0,0,15.8-39.1,171.9,171.9,0,0,0,17,7.5,8.2,8.2,0,0,0,2.6.4,7.5,7.5,0,0,0,2.7-14.5,164,164,0,0,1-22.5-10.4l-.7-.5A162.7,162.7,0,0,1,98.4,249.2a2.9,2.9,0,0,0-.2-.9,166.2,166.2,0,0,1-4.5-38.1,161.1,161.1,0,0,1,8.1-50.7H410.2a164.3,164.3,0,0,1,8,45v.2c0,1.8.1,3.7.1,5.5a160.7,160.7,0,0,1-6.9,46.8,7.5,7.5,0,0,0,5,9.3,6,6,0,0,0,2.2.4,7.6,7.6,0,0,0,7.2-5.4l1.1-3.8c7.2-.9,14.3-1.9,21.1-3.2,3.6-.6,7.2-1.4,10.7-2.2a31.5,31.5,0,0,1,36.7,40.7Z"
              transform="translate(0 -32.9)"/>
        <path className="cls-1"
              d="M274.5,197.5H239.3a14.1,14.1,0,0,0-14.1,14.1v17c0,17.2,13.7,31.7,30.5,32.3h1.2a31.7,31.7,0,0,0,31.7-31.7V211.6A14.1,14.1,0,0,0,274.5,197.5Zm-.9,31.7a16.5,16.5,0,0,1-5.1,12,16.9,16.9,0,0,1-12.2,4.7c-8.9-.3-16.1-8.1-16.1-17.3V212.5h33.4Z"
              transform="translate(0 -32.9)"/>
        <path className="cls-1"
              d="M171.9,196.4a7.5,7.5,0,0,0-7.5,7.5v14.3a7.5,7.5,0,0,0,15,0V203.9A7.4,7.4,0,0,0,171.9,196.4Z"
              transform="translate(0 -32.9)"/>
      </svg>
      <svg id="sake" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.5 512"><path d="M376.6,422a6.9,6.9,0,0,1-5.1,2.4,6.7,6.7,0,0,1-5.1-2.4,7.5,7.5,0,1,0-11.3,9.9,21.7,21.7,0,0,0,32.8,0,7.5,7.5,0,0,0-11.3-9.9Z" transform="translate(-61.2)"/><path d="M323.2,419.9v6.8a7.5,7.5,0,0,0,15,0v-6.8a7.5,7.5,0,0,0-15,0Z" transform="translate(-61.2)"/><path d="M203.5,423.8a7.6,7.6,0,0,0-8.5-6.4,7.5,7.5,0,0,0-6.3,8.5v.2c-5.8.1-14.7.1-23.6-.1-.3-4.3-.4-10.4-.4-15.3a7.5,7.5,0,0,0-15,0c0,2.7,0,9.2.3,15l-9.7-.4c0-1.6,0-3.2.1-4.5v-3.5a7.5,7.5,0,0,0-15,0v3.2c-.1,4-.2,9.4,0,12.5a7.6,7.6,0,0,0,6.3,6.8c1.7.3,13.3.7,26.4,1.1h.3l22.7.3h7.1a7.6,7.6,0,0,0,5.8,7.8l1.7.2a7.6,7.6,0,0,0,7.3-5.9,59.1,59.1,0,0,0,.7-8.9,5.4,5.4,0,0,0,0-1.8A68.1,68.1,0,0,0,203.5,423.8Z" transform="translate(-61.2)"/><path d="M404.8,419.9v6.8a7.5,7.5,0,0,0,15,0v-6.8a7.5,7.5,0,0,0-15,0Z" transform="translate(-61.2)"/><path d="M130.8,386a61.2,61.2,0,0,1,6.3.3,67.3,67.3,0,0,0-6.3,3.2,7.5,7.5,0,0,0-2,10.4,7.4,7.4,0,0,0,10.4,2.1c4-2.6,36.9-15.8,53-20.5a103.3,103.3,0,0,1,0,17.6,130.3,130.3,0,0,1-18.2-5.9,7.6,7.6,0,0,0-10,3.7,7.5,7.5,0,0,0,3.7,9.9,118.5,118.5,0,0,0,14.7,5.2c5.1,1.5,9.4,2.5,13,2.5s6.3-.9,8.3-3.3,3.9-4.5,3.9-20.3c0-3.4-.2-14.9-2.5-21.1a7.7,7.7,0,0,0-8-4.8c-5.7.7-18.9,5-32,10-9.9-2.4-32.3-4.1-35-4a7.5,7.5,0,0,0,.7,15Z" transform="translate(-61.2)"/><path d="M224.3,118.4h0L207.6,68.1a16,16,0,0,0,9.9-14.8V46.1a7.5,7.5,0,0,0-15,0v7.2a.9.9,0,0,1-.9.9H125.3a.9.9,0,0,1-.9-.9V15.9a.9.9,0,0,1,.9-.9h76.3a.9.9,0,0,1,.9.9V17a7.5,7.5,0,0,0,15,0V15.9A15.9,15.9,0,0,0,201.6,0H125.3a15.9,15.9,0,0,0-15.9,15.9V53.3a15.9,15.9,0,0,0,10,14.8l-16.8,50.3h0l-25,75.3a7.4,7.4,0,0,0,4.8,9.4,6.6,6.6,0,0,0,2.3.4,7.6,7.6,0,0,0,7.2-5.1l23.3-70.2h96.5l23.6,70.9a300.1,300.1,0,0,1,15.3,91.1H76.3A296.1,296.1,0,0,1,83.6,228,7.5,7.5,0,1,0,69,224.7a311.6,311.6,0,0,0-7.8,69.4V470.5A41.5,41.5,0,0,0,102.7,512H224.2a41.5,41.5,0,0,0,41.5-41.5V294.1a313.7,313.7,0,0,0-16.2-99.8Zm-104.1-5.2,14.6-44h57.3l14.6,44ZM250.7,470.5A26.5,26.5,0,0,1,224.2,497H102.7a26.5,26.5,0,0,1-26.5-26.5v-2.8H250.7Zm0-58.1H240.6v-30h10.1Zm0-45H233.1a7.6,7.6,0,0,0-7.5,7.5v45a7.6,7.6,0,0,0,7.5,7.5h17.6v25.3H76.2V305.2H250.7v62.2Z" transform="translate(-61.2)"/><path d="M133.3,361.2c4.4,1.1,15.7,1.5,26.8,1.5h0a7.5,7.5,0,0,0,15,0v-.2c11.8-.2,24.3-.6,27.1-1.7a7.2,7.2,0,0,0,4.7-5.3c.6-2.7.7-11.5.7-18.6h0v-.6c0-16.8-.5-17.9-1.3-19.5a7.5,7.5,0,0,0-4.8-3.9c-4.2-1.1-19-1.7-33.8-1.7h-.2c-14.7,0-29.4.6-34,1.6a7.6,7.6,0,0,0-5.8,7.3c0,1.2-.1,3.7-.1,6.7-.1,13.3-.2,24.6.1,27.8A7.5,7.5,0,0,0,133.3,361.2Zm59.2-14.1-17.4.5v-3.1h17.5C192.6,345.4,192.5,346.3,192.5,347.1Zm-17.4-20.8,17.4.5a23.5,23.5,0,0,1,.1,2.7H175.1v-3.2Zm-32.5.6h0c4.5-.3,10.8-.5,17.5-.6v3.3H142.6Zm17.5,17.6h0v3.2c-6.8,0-13.2-.1-17.6-.4v-2.8Z" transform="translate(-61.2)"/><path d="M441.9,384.8,417,319.5a20.4,20.4,0,0,1,0-14.6l24.2-64.8a15.5,15.5,0,0,0-1.8-14,15.4,15.4,0,0,0-12.5-6.5H316.1a15.2,15.2,0,0,0-14.3,20.5L326,304.9a20.4,20.4,0,0,1,0,14.6l-24.9,65.3A135.8,135.8,0,0,0,311,502.5a19.1,19.1,0,0,0,16.5,9.5h87.9a19.2,19.2,0,0,0,16.6-9.5c.8-1.3,1.5-2.6,2.2-3.9a7.5,7.5,0,1,0-13.2-7.1l-1.9,3.4a4.4,4.4,0,0,1-3.7,2.1H327.5a4.3,4.3,0,0,1-3.6-2.1,120.8,120.8,0,0,1-8.7-104.8L340,324.9a35.2,35.2,0,0,0,2.3-11.6c9.7-.9,18.3,1.8,27.4,4.6s17,5.3,26.9,5.3a36.4,36.4,0,0,0,5.7-.4,17.2,17.2,0,0,0,.7,2.1l24.8,65.2a121.5,121.5,0,0,1,3.4,76.3,7.5,7.5,0,1,0,14.5,4.1A138,138,0,0,0,441.9,384.8Zm-39-85.1a39.3,39.3,0,0,0-2,8.2c-9.1,1.1-17.4-1.5-26.8-4.3s-21.3-6.6-34.5-5.1l-23.7-63.6c0-.1-.1-.1,0-.2H427.1v.2Z" transform="translate(-61.2)"/></svg>
      <h1>{siteTitle}</h1>
      <p className="lead">A kawaii placeholder text generator for your inner weeaboo.</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
