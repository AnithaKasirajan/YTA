import React, { useEffect, useState } from "react";
import '../css/analytics.css';
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { CardContent, Typography, Grid } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

function Analytics() {
    const [selectedContent, setSelectedContent] = useState("Overview");
    const [selectedChart, setSelectedChart] = useState("Views");
    const [selectedFilter, setSelectedFilter] = useState("Last Month");

    const handleSidebarClick = (content) => {
        setSelectedContent(content);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const dataMap = {
        "Last Month": {
            totalViewsData: [220, 550, 180, 300, 450, 120],
            totalSubscribersData: [650, 1200, 950, 800, 500, 1400],
            totalWatchTimeData: [75, 140, 60, 85, 120, 95],
            totalRevenueData: [350, 600, 450, 400, 200, 700],
            xLabels: ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        },
        "Last Year": {
            totalViewsData: [110, 250, 90, 225, 130, 275],
            totalSubscribersData: [325, 600, 475, 400, 250, 700],
            totalWatchTimeData: [30, 42, 37, 60, 50, 70],
            totalRevenueData: [100, 200, 175, 300, 225, 350],
            xLabels: ['2023', '2022', '2021', '2020', '2019', '2018'],
        },
        "Last Week": {
            totalViewsData: [60, 85, 75, 120, 95, 140],
            totalSubscribersData: [250, 300, 200, 400, 350, 450],
            totalWatchTimeData: [15, 30, 25, 45, 35, 50],
            totalRevenueData: [50, 100, 90, 150, 125, 175],
            xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        "Today": {
            totalViewsData: [10, 25, 15, 35, 22, 55],
            totalSubscribersData: [50, 80, 65, 120, 95, 140],
            totalWatchTimeData: [6, 8.5, 7.5, 12, 9.5, 14],
            totalRevenueData: [20, 40, 35, 60, 45, 70],
            xLabels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
        },
    };

    const ageBarMap = {
        "Last Month": {
            totalMaleAgeData: [100, 60, 97, 55, 75, 60, 72, 50, 65, 40, 30, 20, 10],
            totalFemaleAgeData: [100, 75, 50, 69, 47, 60, 85, 55, 42, 30, 22, 15, 8],
            xLabels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        },
        "Last Year": {
            totalMaleAgeData: [100, 62, 98, 60, 76, 58, 70, 52, 68, 42, 28, 18, 12],
            totalFemaleAgeData: [100, 70, 48, 72, 46, 58, 88, 53, 40, 28, 20, 16, 7],
            xLabels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        },
        "Last Week": {
            totalMaleAgeData: [100, 65, 94, 58, 74, 62, 68, 55, 72, 45, 31, 22, 11],
            totalFemaleAgeData: [100, 72, 52, 68, 50, 62, 82, 58, 44, 32, 25, 17, 9],
            xLabels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        },
        "Today": {
            totalMaleAgeData: [100, 68, 96, 62, 78, 64, 74, 52, 70, 48, 34, 24, 12],
            totalFemaleAgeData: [100, 78, 55, 71, 51, 64, 85, 60, 45, 34, 23, 20, 8],
            xLabels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        },
    }

    const countryBarMap = {
        "Last Month": {
            totalCountryData: [100, 90, 60, 50],
            xLabels: ['INDIA', 'AUSTRALIA', 'USA', 'UK']
        },
        "Last Year": {
            totalCountryData: [100, 88, 62, 48],
            xLabels: ['INDIA', 'AUSTRALIA', 'USA', 'UK']
        },
        "Last Week": {
            totalCountryData: [100, 85, 63, 52],
            xLabels: ['INDIA', 'AUSTRALIA', 'USA', 'UK']
        },
        "Today": {
            totalCountryData: [100, 80, 64, 51],
            xLabels: ['INDIA', 'AUSTRALIA', 'USA', 'UK']
        }
    }

    const currentData = dataMap[selectedFilter];
    const ageCurrentData = ageBarMap[selectedFilter];
    const countryCurrentData = countryBarMap[selectedFilter]

    //Sub Count
    const [subscriberCount, setSubscriberCount] = useState(2406380);
    useEffect(() => {
        const updateSubscriberCount = () => {
            const change = Math.random() > 0.5 ? 10 : -1;
            setSubscriberCount(prevCount => prevCount + change);
        };
        const intervalId = setInterval(updateSubscriberCount, 1000);
        return () => clearInterval(intervalId);
    }, []);

    //likes count
    const [likes, setLikes] = useState(1250220);
    useEffect(() => {
        const updateLikes = () => {
            const change = Math.random() > 0.5 ? 5 : -1;
            setLikes(prevLikes => prevLikes + change);
        };
        const intervalId = setInterval(updateLikes, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Views state and effect
    const [views, setViews] = useState(9876354);
    useEffect(() => {
        const updateViews = () => {
            const change = Math.random() > 0.5 ? 20 : -5;
            setViews(prevViews => prevViews + change);
        };
        const intervalId = setInterval(updateViews, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Interactions state and effect
    const [interactions, setInteractions] = useState(34356);
    useEffect(() => {
        const updateInteractions = () => {
            const change = Math.random() > 0.5 ? 3 : -1;
            setInteractions(prevInteractions => prevInteractions + change);
        };
        const intervalId = setInterval(updateInteractions, 1000);
        return () => clearInterval(intervalId);
    }, []);

    //leaderboardVideos
    const [videos, setVideos] = useState([
        { id: 1, title: 'Deep Sea Secrets', views: 500000 },
        { id: 2, title: 'Weekend DIY Projects', views: 335000 },
        { id: 3, title: 'Authentic Italian Pasta', views: 234400 },
        { id: 4, title: 'Public Speaking Tips', views: 102430 },
    ]);
    useEffect(() => {
        const incrementViews = () => {
            setVideos(prevVideos =>
                prevVideos.map(video => ({
                    ...video,
                    views: video.views + Math.floor(Math.random() * 10) + 1,
                }))
            );
        };
        const intervalId = setInterval(incrementViews, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const sortedVideos = [...videos].sort((a, b) => b.views - a.views);

    //likesAndDislikes
    const [videosLikes, setVideosLikes] = useState([
        { id: 1, title: 'Deep Sea Secrets', metrics: { likes: 1000, dislikes: 50, comments: 300, shares: 200, ctr: 5.5, avgViewDuration: 120 } },
        { id: 2, title: 'Weekend DIY Projects', metrics: { likes: 800, dislikes: 30, comments: 250, shares: 150, ctr: 4.8, avgViewDuration: 100 } },
        { id: 3, title: 'Authentic Italian Pasta', metrics: { likes: 1200, dislikes: 60, comments: 400, shares: 220, ctr: 6.2, avgViewDuration: 140 } },
    ]);
    useEffect(() => {
        const incrementMetrics = () => {
            setVideosLikes(prevVideos =>
                prevVideos.map(video => ({
                    ...video,
                    metrics: {
                        likes: video.metrics.likes + Math.floor(Math.random() * 5) + 1,
                        dislikes: video.metrics.dislikes + Math.floor(Math.random() * 2),
                        comments: video.metrics.comments + Math.floor(Math.random() * 3) + 1,
                        shares: video.metrics.shares + Math.floor(Math.random() * 2) + 1,
                        ctr: parseFloat((video.metrics.ctr + (Math.random() - 0.5) * 0.1).toFixed(2)),
                        avgViewDuration: video.metrics.avgViewDuration + Math.floor(Math.random() * 5) + 1,
                    },
                }))
            );
        };
        const intervalId = setInterval(incrementMetrics, 1000);
        return () => clearInterval(intervalId);
    }, []);


    //videoSection
    const yourVideos = {
        popularUploads: [
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },

        ],
        mostLikedVideos: [
            { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/150' },
            { id: 4, title: 'Video 4', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
        ],
        longestVideos: [
            { id: 5, title: 'Video 5', thumbnail: 'https://via.placeholder.com/150' },
            { id: 6, title: 'Video 6', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' }, { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
            { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
        ],
    };

    const renderContent = () => {
        switch (selectedContent) {
            case "Overview":
                return (
                    <div className="overviewDIV">
                        <h2 className="mainHeading">Hello UserName !</h2>
                        <h5 className="subHeading">Channel Overview</h5>
                        <div className="overviewContents">
                            <Card style={{ borderRadius: '0px' }}>
                                <CardContent className="type2Chart" style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                                    <div className="chartButtonContainer">
                                        <Button
                                            className={`chartButton ${selectedChart === "Views" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("Views")}
                                        >
                                            Views
                                        </Button>
                                        <Button
                                            className={`chartButton ${selectedChart === "Subscribers" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("Subscribers")}
                                        >
                                            Subscribers
                                        </Button>
                                        <Button
                                            className={`chartButton ${selectedChart === "Watch Time" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("Watch Time")}
                                        >
                                            Watch Time
                                        </Button>
                                        <Button
                                            className={`chartButton ${selectedChart === "Revenue" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("Revenue")}
                                        >
                                            Revenue
                                        </Button>
                                        <Button
                                            className={`chartButton ${selectedChart === "Countries" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("Countries")}
                                        >
                                            Countries
                                        </Button>
                                        <Button
                                            className={`chartButton ${selectedChart === "AgeGender" ? "active" : ""}`}
                                            onClick={() => setSelectedChart("AgeGender")}
                                        >
                                            Age and Gender
                                        </Button>
                                    </div>

                                    {selectedChart === "Views" && (
                                        <LineChart
                                            xAxis={[{ scaleType: 'point', data: currentData.xLabels }]}
                                            series={[
                                                {
                                                    data: currentData.totalViewsData,
                                                },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    {selectedChart === "Subscribers" && (
                                        <LineChart
                                            xAxis={[{ scaleType: 'point', data: currentData.xLabels }]}
                                            series={[
                                                {
                                                    data: currentData.totalSubscribersData,
                                                },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    {selectedChart === "Watch Time" && (
                                        <LineChart
                                            xAxis={[{ scaleType: 'point', data: currentData.xLabels }]}
                                            series={[
                                                {
                                                    data: currentData.totalWatchTimeData,
                                                },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    {selectedChart === "Revenue" && (
                                        <LineChart
                                            xAxis={[{ scaleType: 'point', data: currentData.xLabels }]}
                                            series={[
                                                {
                                                    data: currentData.totalRevenueData,
                                                },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    {selectedChart === "Countries" && (
                                        <BarChart
                                            xAxis={[{ scaleType: 'band', data: countryCurrentData.xLabels }]}
                                            series={[
                                                { data: countryCurrentData.totalCountryData },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    {selectedChart === "AgeGender" && (
                                        <BarChart
                                            xAxis={[{ scaleType: 'band', data: ageCurrentData.xLabels }]}
                                            series={[
                                                { data: ageCurrentData.totalMaleAgeData, label: 'Male' },
                                                { data: ageCurrentData.totalFemaleAgeData, label: 'Female' },
                                            ]}
                                            height={200}
                                        />
                                    )}
                                    <div style={{ height: '100%', padding: '10px' }}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {selectedFilter}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleFilterChange("Last Month")}>Last Month</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleFilterChange("Last Year")}>Last Year</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleFilterChange("Last Week")}>Last Week</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleFilterChange("Today")}>Today</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>


                                </CardContent>
                            </Card>

                            <div className="cardAnalytics my-3">
                                <Grid container spacing={2}>
                                    <Grid item md={3}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6">Live Subscriber Count</Typography>
                                                <div>
                                                    <div className="subCountNumber">{subscriberCount.toLocaleString()}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6">Live Total Views Count</Typography>
                                                <div>
                                                    <div className="subCountNumber">{views.toLocaleString()}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6">Live Total Likes Count</Typography>
                                                <div>
                                                    <div className="subCountNumber">{likes.toLocaleString()}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6">Live Interactions/sec Count</Typography>
                                                <div>
                                                    <div className="subCountNumber">{interactions.toLocaleString()}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="liveContentViews mb-3">
                                <Card className="cardWithTotal">
                                    <CardContent>
                                        <Typography variant="h6">Videos Leaderboard</Typography>
                                        <div className="mt-2">
                                            <ul className="ranked-list">
                                                {sortedVideos.map(video => (
                                                    <li className="mb-2" key={video.id}>
                                                        <div>{video.title} : {video.views.toLocaleString()} views</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="liveLikesCount">
                                <Card>
                                    <CardContent className="likesMetricCard">
                                        <Typography variant="h6">Engagement Metrics</Typography>
                                        <div className="mt-2 likesMetricCardDetails">
                                            {videosLikes.map(video => (
                                                <div key={video.id}>
                                                    <h6>{video.title}</h6>
                                                    <ul>
                                                        <li><strong>Likes:</strong> {video.metrics.likes.toLocaleString()}</li>
                                                        <li><strong>Dislikes:</strong> {video.metrics.dislikes.toLocaleString()}</li>
                                                        <li><strong>Comments:</strong> {video.metrics.comments.toLocaleString()}</li>
                                                        <li><strong>Shares:</strong> {video.metrics.shares.toLocaleString()}</li>
                                                        <li><strong>Click-Through Rate (CTR):</strong> {video.metrics.ctr}%</li>
                                                        <li><strong>Average View Duration:</strong> {video.metrics.avgViewDuration} seconds</li>
                                                    </ul>
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                );
            case "Audience":
                return <div></div>;
            case "Videos":
                return (
                    <div className="videosContainer">
                        <h2 className="mainHeading">Your Videos</h2>
                        <div className="videosContent">
                            {Object.entries(yourVideos).map(([category, videoList]) => (
                                <Col md={12} key={category} className="mb-4">
                                    <Card>
                                        <Card.Header>
                                            <h5>{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h5>
                                        </Card.Header>
                                        <Card.Body className="w-100" style={{ overflow: 'auto' }}>
                                            <div className="videoScroll d-flex">
                                                {videoList.map(video => (
                                                    <Card key={video.id} className="mx-3 d-flex">
                                                        <Card.Img variant="top" src={video.thumbnail} />
                                                        <Card.Body>
                                                            <Card.Title>{video.title}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </div>
                    </div>
                );
            case "Content Performance":
                return <div>Content Performance</div>;
        }
    };

    return (
        <div className="analyticsContent">
            <div className="sideBar col-md-2">
                <div className="menu">
                    <Button
                        className={`menuButton ${selectedContent === "Overview" ? "active" : ""}`}
                        onClick={() => handleSidebarClick("Overview")}
                    >
                        Dashboard
                    </Button>
                    <Button
                        className={`menuButton ${selectedContent === "Audience" ? "active" : ""}`}
                        onClick={() => handleSidebarClick("Audience")}
                    >
                        Your Competitors
                    </Button>
                    <Button
                        className={`menuButton ${selectedContent === "Videos" ? "active" : ""}`}
                        onClick={() => handleSidebarClick("Videos")}
                    >
                        Your Videos
                    </Button>
                    <Button
                        className={`menuButton ${selectedContent === "Content Performance" ? "active" : ""}`}
                        onClick={() => handleSidebarClick("Content Performance")}
                    >
                        Table
                    </Button>
                </div>
            </div>
            <div className="analyticsContentBody col-md-10">
                {renderContent()}
            </div>
        </div>
    );
}

export default Analytics;
