import React from 'react'
import { Link } from 'react-router-dom'

function AddJobForm() {
  return (
          <div className=" mt-5 p-3 mx-auto text-light rounded  animate__animated animate__rotateIn">
        <div className="container row d-flex justify-content-between ">
          <div className="col-lg-6 col-10 ">
            <h2 className="p-1  text-start fw-bolder">Add Jop Details</h2>
            <hr className="w-100 text-warning " />
          </div>
          <div className="col-lg-4 col-10">
            <button className="btn btn-warning w-75 mt-4 mx-5 fs-5 fw-bolder p-1 hvr-bubble-float-bottom">
              Puplish
            </button>
          </div>
        </div>
        <form>
          <div className="container con1 row d-flex justify-content-between  p-3">
            <div className="col-10 col-lg-6 mt-4 p-3">
              <label className="w-100 p-1 text-start fw-bolder">
                Company Name
              </label>
              <input className="w-100 bg-secondary rounded " />
              <div className="container row">
                <div className="col">
                  <label className="w-100 p-1 text-start fw-bolder">
                    field
                  </label>
                  <select className="w-100  bg-secondary rounded ">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <div className="col">
                  <label className="w-100 p-1 text-start fw-bolder">
                    Location
                  </label>
                  <select className="w-100 bg-secondary rounded   ">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-6 p-5 p-3">
              <h5>Company Logo</h5>

              <div className="rounded col-10 col-lg-12 p-5 bg-dark ">
                <Link href="#" className="text-warning">
                  browse
                </Link>
              </div>
            </div>
            <label className="w-100 p-1 text-start fw-bolder">
              About The Company
            </label>
            <textarea className="rounded w-100  bg-secondary rounded  "></textarea>
          </div>

          <div className="container con2 row p-3">
            <div className="col-lg-6 col-10 p-3">
              <label className="w-100 p-1 text-start fw-bolder">Position</label>
              <input className=" col-lg-6 col-10 bg-secondary rounded " />
            </div>
            <div className="col p-3">
              <label className="w-100 p-1 text-start fw-bolder">Jop Type</label>
              <input className="w-25  bg-secondary rounded " />
              <input className="mx-2" type="radio" name="a" />
              Remote
              <input className="mx-2" type="radio" name="a" />
              On Site
            </div>
          </div>

          <div className="container con3 row p-2">
            <div className="col p-2">
              <div className="container row p-2">
                <label className="w-100 p-1 text-start fw-bolder">
                  Salary Range
                </label>
                <input className="col  bg-secondary rounded " /> To{" "}
                <input className="col bg-secondary rounded  " />
              </div>
            </div>
            <div className="col p-2">
              <label className="w-100 p-1 text-start fw-bolder  ">
                Currancy
              </label>
              <select className="rounded w-100 bg-secondary rounded  ">
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>

          <label className="w-100 p-1 text-start fw-bolder ">
            Jop Description
          </label>
          <textarea className="rounded w-100  bg-secondary rounded "></textarea>
          <label className="w-100 p-1  text-start fw-bolder">
            Jop Requirements
          </label>
          <textarea className="rounded w-100 bg-secondary rounded  "></textarea>
          <label className="w-100 p-1 text-start fw-bolder ">Skills</label>
          <textarea className="rounded w-100  bg-secondary rounded  "></textarea>
          <div className="container row d-flex justify-content-end">
            <div className="col-lg-5 col-10">
              <button className="btn btn-secondary  mt-3 col-lg-4 col-10 p-3 mx-1 hvr-curl-top-left">
                Cancel
              </button>
              <button className="btn btn-warning mt-3  col-lg-4 col-10  p-3 mx-1 hvr-curl-top-left">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default AddJobForm

