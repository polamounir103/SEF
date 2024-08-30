import React, { useEffect, useState } from 'react'
import './Jobs.css'
import { IoMdSearch } from 'react-icons/io'
import { CgTimer } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { ImMenu } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { filterByJobType, filterByLevel, filterByLocation, filterBySalaryRange, filterBySearch, filterejobs } from '../../redux/slice/jobslice'
import data from '../../DB/jobs.json'
import { RiMenu5Fill } from 'react-icons/ri'
const Jobs = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('All')
    const [jobtype, setJobtype] = useState('')
    const [level, setLevel] = useState('')
    const [salaryrange, setSalaryrange] = useState(0)
    const [inputsearch, setInputsearch] = useState("")
    const [jobs, setJobs] = useState([])
    const [checkedJobType, setCheckedJobType] = useState({
        fulltime: false,
        parttime: false,
        remote: false,
    });
    const [checkedLevel, setCheckedLevel] = useState({
        entrylevel: false,
        intermediate: false,
        expert: false,
    });
    const [checkedSalaryRange, setCheckedSalaryRange] = useState({
        under4000: false,
        between4000and10000: false,
        more10000: false,
    });
    useEffect(() => {
        if (data) { setJobs(data) }
    }, [data])
    const filteredjobs = useSelector(filterejobs)
    const currentjobs = filteredjobs.length === 0 ? jobs : filteredjobs;
    const locations = [
        "All",
        ...new Set(jobs.map((jop) => jop.location)),
    ];

    // Function to handle filter change
    useEffect(() => {
        dispatch(filterByJobType({ jobs: jobs, jobType: jobtype }))
    }, [dispatch, jobtype, jobs])
    useEffect(() => {
        dispatch(filterByLevel({ jobs: jobs, level: level }))
    }, [dispatch, level, jobs])
    useEffect(() => {
        dispatch(filterBySalaryRange({ jobs: jobs, salaryRange: salaryrange }))
    }, [dispatch, salaryrange, jobs])
    useEffect(() => {
        dispatch(filterByLocation({ jobs: jobs, location: location }));
    }, [dispatch, location, jobs])

    // Function to handle checkbox change
    const handleCheckJobTypeChange = (event) => {
        const { name, checked } = event.target;
        setCheckedJobType((prevItems) => ({
            ...prevItems, [name]: checked,
        }));
    };
    const handleCheckLevelChange = (event) => {
        const { name, checked } = event.target;
        setCheckedLevel((prevItems) => ({
            ...prevItems, [name]: checked,
        }));
    };
    const handleCheckSalaryRangeChange = (event) => {
        const { name, checked } = event.target;
        setCheckedSalaryRange((prevItems) => ({
            ...prevItems, [name]: checked,
        }));
    };
    const resetFilter = () => {
        setInputsearch('')
        setLocation('All')
        setJobtype('')
        setLevel('')
        setSalaryrange(0)
        setCheckedJobType({
            fulltime: false,
            parttime: false,
            remote: false
        })
        setCheckedLevel({
            entrylevel: false,
            intermediate: false,
            expert: false
        })
        setCheckedSalaryRange({
            under4000: false,
            between4000and10000: false,
            more10000: false
        })
    }
    const [active, setActive] = useState(false)
    console.log(salaryrange);

    return (
        <section className='jobs'>
            <div className="container">
                <h2>jobs</h2>
                <h3>6th June 2023</h3>
                <div className="content">
                    <div className="content-top">
                        <div className="content-top-left">
                            <h2>Looking for a job ?</h2>
                            <p>here you can find your best match between 1000s of updated and available positions.</p>
                        </div>
                        <div className="content-top-right">
                            <i><IoMdSearch color='#bf9b30' size={35} /></i>
                            <input type="text" value={inputsearch} onChange={(e) => setInputsearch(e.target.value)} placeholder='Search for a job' />
                            <button onClick={() => dispatch(filterBySearch({ jobs: jobs, search: inputsearch }))}>Search</button>
                        </div>
                        <div className='hide'>
                            <button onClick={() => dispatch(filterBySearch({ jobs: jobs, search: inputsearch }))}>Search</button>
                            <button onClick={() => setActive(!active)}><RiMenu5Fill size={40} /></button>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className={`content-bottom-left ${active && "active"}`}>
                            <div className="filters-clear">
                                <p>Filters</p>
                                <button onClick={resetFilter}>CLear All</button>
                            </div>
                            <div className="location">
                                <h2>Location</h2>
                                <select aria-label="Default select example" className='form-select' onChange={(e) => {
                                    setLocation(e.target.value)
                                }}>
                                    {locations.map((loc, index) => {
                                        return (<option key={index} value={loc}>{loc}</option>)
                                    })}
                                </select>
                            </div>
                            <div className="job-type">
                                <h2>Job Type</h2>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedJobType.fulltime} onChange={(e) => { handleCheckJobTypeChange(e); jobtype === "Full Time" ? setJobtype("") : setJobtype("Full Time") }} name="fulltime" id="fulltime" />
                                    <label htmlFor="fulltime">Full Time</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedJobType.parttime} onChange={(e) => { handleCheckJobTypeChange(e); jobtype === "Part Time" ? setJobtype("") : setJobtype("Part Time") }} name="parttime" id="parttime" />
                                    <label htmlFor="parttime">Part Time</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedJobType.remote} onChange={(e) => { handleCheckJobTypeChange(e); jobtype === "Remote" ? setJobtype("") : setJobtype("Remote") }} name="remote" id="remote" />
                                    <label htmlFor="remote">Remote</label>
                                </div>
                            </div>
                            <div className="level">
                                <h2>Level</h2>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedLevel.entrylevel} onChange={(e) => { handleCheckLevelChange(e); level === "Entry Level" ? setLevel("") : setLevel("Entry Level") }} name="entrylevel" id="entrylevel" />
                                    <label htmlFor="entrylevel">Entry Level</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedLevel.intermediate} onChange={(e) => { handleCheckLevelChange(e); level === "Intermediate" ? setLevel("") : setLevel("Intermediate") }} name="intermediate" id="intermediate" />
                                    <label htmlFor="intermediate">Intermediate</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedLevel.expert} onChange={(e) => { handleCheckLevelChange(e); level === "Expert" ? setLevel("") : setLevel("Expert") }} name="expert" id="expert" />
                                    <label htmlFor="expert">Expert</label>
                                </div>
                            </div>
                            <div className="salary-range">
                                <h2>Salary Range</h2>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedSalaryRange.under4000} onChange={(e) => { handleCheckSalaryRangeChange(e); salaryrange === 4000 ? setSalaryrange(0) : setSalaryrange(4000) }} name="under4000" id="under4000" />
                                    <label htmlFor="under4000">Under 4000 EGB</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedSalaryRange.between4000and10000} onChange={(e) => { handleCheckSalaryRangeChange(e); salaryrange === 8000 ? setSalaryrange(0) : setSalaryrange(8000) }} name="between4000and10000" id="between4000and10000" />
                                    <label htmlFor="between4000and10000">Between 4000 & 10000 EGB</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" checked={checkedSalaryRange.more10000} onChange={(e) => { handleCheckSalaryRangeChange(e); salaryrange === 10000 ? setSalaryrange(0) : setSalaryrange(10000) }} name="more10000" id="more10000" />
                                    <label htmlFor="more10000">More Than 10000 EGB</label>
                                </div>
                            </div>
                        </div>
                        <div className="content-bottom-right">
                            {
                                currentjobs.map((ele, index) => {
                                    return (
                                        <div className="job" key={index}>
                                            <div className="job-header">
                                                <div className="title">
                                                    <p><ImMenu size={50} />IT</p>
                                                    <div>
                                                        <h2>{ele.jobName}</h2>
                                                        <h3 >{ele.location}</h3>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <p>{ele.minPrice} EGB - {ele.maxPrice} EGB per Month</p>
                                                    <p ><CiLocationOn className='inline-block' color='#b49b30' size={25} /> On Site</p>
                                                </div>
                                            </div>
                                            <div className="job-desc">
                                                <p>{ele.description}</p>
                                                <div className="tools">
                                                    {(ele.tools).map((ele, index) => {
                                                        return (
                                                            <p key={index} >{ele}</p>
                                                        )
                                                    })}
                                                    {/* <p className='mr-3 border-2 border-[#b49b30] p-2 rounded-lg uppercase'>devolopment</p> */}
                                                </div>
                                            </div>
                                            <div className="job-details">
                                                <p><CgTimer color='#474646' size={35} /> {ele.time} ago</p>
                                                <button>view details</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs