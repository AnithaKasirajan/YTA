import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import 'react-tabs/style/react-tabs.css';
import '../css/dashboard.css'

function Analytics() {

    //overview charts
    const calculateTotal = (data) => data.reduce((acc, value) => acc + value, 0);
    const totalViewsData = [120, 300, 180, 450, 220, 550];
    const totalSubscribersData = [500, 800, 650, 1200, 950, 1400];
    const totalWatchTimeData = [60, 85, 75, 120, 95, 140];
    const totalRevenueData = [200, 400, 350, 600, 450, 700];
    const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    //views by country chart
    const dataset = [{ USA: 59, UK: 57, AUSTRALIA: 86, INDIA: 21, month: 'Jan' }, { USA: 50, UK: 52, AUSTRALIA: 78, INDIA: 28, month: 'Feb' }, { USA: 47, UK: 53, AUSTRALIA: 106, INDIA: 41, month: 'Mar' }, { USA: 54, UK: 56, AUSTRALIA: 92, INDIA: 73, month: 'Apr' }, { USA: 57, UK: 69, AUSTRALIA: 92, INDIA: 99, month: 'May' }, { USA: 60, UK: 63, AUSTRALIA: 103, INDIA: 144, month: 'June' }, { USA: 59, UK: 60, AUSTRALIA: 105, INDIA: 319, month: 'July' }, { USA: 65, UK: 60, AUSTRALIA: 106, INDIA: 249, month: 'Aug' }, { USA: 51, UK: 51, AUSTRALIA: 95, INDIA: 131, month: 'Sept' }, { USA: 60, UK: 65, AUSTRALIA: 97, INDIA: 55, month: 'Oct' }, { USA: 67, UK: 64, AUSTRALIA: 76, INDIA: 48, month: 'Nov' }, { USA: 61, UK: 70, AUSTRALIA: 103, INDIA: 25, month: 'Dec' }];
    const valueFormatter = (value) => `${value} views`;
    const chartSetting = {
        yAxis: [
            {
                label: 'Views',
            },
        ],
        height: 200,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };

    //age and gender chart:
    const femaleData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const maleData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const age = [
        ' < 13',
        '13-16',
        '17-20',
        '21-24',
        '25-38',
        '29-32',
        '32 >'
    ];

    //language chart
    const languageData = [4000, 3000, 2000, 2780]
    const language = ['Tamil', 'Telugu', 'English', 'Hindi']

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

    return (
        <div className="analyticsContent">
            <div className="col-md-2 details">
                <div className="profile">
                    <div className="channelLOGO">
                        <div className="logo"></div>
                    </div>
                    <div className="channelName">
                        CHANNEL NAME HERE
                    </div>
                    <div className="subscribers">
                        2.4 M Subscribers
                    </div>
                </div>
                <div className="people">
                    <div className="peopleChannelName">
                        People You Follow
                    </div>
                    <div className="followingChannel">
                        <div className="otherChannelLOGO"></div>
                        <div className="otherChannelName">Channel Number 1</div>
                        <div className="otherChannelSubscribers"> 1.5 M Subscribers</div>
                    </div>
                    <div className="followingChannel">
                        <div className="otherChannelLOGO"></div>
                        <div className="otherChannelName">Channel Number 2</div>
                        <div className="otherChannelSubscribers"> 2.5 M Subscribers</div>
                    </div>
                    <div className="followingChannel">
                        <div className="otherChannelLOGO"></div>
                        <div className="otherChannelName">Channel Number 3</div>
                        <div className="otherChannelSubscribers"> 3.5 M Subscribers</div>
                    </div>
                    <div className="followingChannel">
                        <div className="otherChannelLOGO"></div>
                        <div className="otherChannelName">Channel Number 4</div>
                        <div className="otherChannelSubscribers"> 1.5 M Subscribers</div>
                    </div>
                    <div className="followingChannel">
                        <div className="otherChannelLOGO"></div>
                        <div className="otherChannelName">Channel Number 5</div>
                        <div className="otherChannelSubscribers"> 1.5 M Subscribers</div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 statistics">
                <div className="title">Channel Analytics</div>
                <div className="cardAnalytics mb-3">
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Card>
                                <CardContent>
                                    <h6>Card one</h6>
                                    <h4>12345</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card>
                                <CardContent>
                                <h6>Card Two</h6>
                                <h4>12345</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card>
                                <CardContent>
                                <h6>Card Three</h6>
                                <h4>12345</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card>
                                <CardContent>
                                <h6>Card Four</h6>
                                <h4>12345</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Audience</Tab>
                        <Tab>Engagement</Tab>
                        <Tab>Content Performance</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="overview">
                            <div className="mb-3">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Total Views</Typography>
                                                <Typography className="totalValue">{calculateTotal(totalViewsData)}</Typography>
                                                <LineChart
                                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                                    series={[
                                                        {
                                                            data: totalViewsData,
                                                        },
                                                    ]}
                                                    height={200}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Subscribers</Typography>
                                                <Typography className="totalValue">{calculateTotal(totalSubscribersData)}</Typography>
                                                <LineChart
                                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                                    series={[
                                                        {
                                                            data: totalSubscribersData,
                                                        },
                                                    ]}
                                                    height={200}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Watch Time</Typography>
                                                <Typography className="totalValue">{calculateTotal(totalWatchTimeData)}</Typography>
                                                <LineChart
                                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                                    series={[
                                                        {
                                                            data: totalWatchTimeData,
                                                        },
                                                    ]}
                                                    height={200}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Revenue</Typography>
                                                <Typography className="totalValue">{calculateTotal(totalRevenueData)}</Typography>
                                                <LineChart
                                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                                    series={[
                                                        {
                                                            data: totalRevenueData,
                                                        },
                                                    ]}
                                                    height={200}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="audience">
                            <div className="mb-3">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Age and Gender Of Audience</Typography>
                                                <BarChart
                                                    height={300}
                                                    series={[
                                                        { data: maleData, label: 'male', id: 'male' },
                                                        { data: femaleData, label: 'female', id: 'female' },
                                                    ]}
                                                    xAxis={[{ data: age, scaleType: 'band' }]}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={6}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Subscribers</Typography>
                                                <BarChart
                                                    height={300}
                                                    series={[
                                                        { data: languageData, label: 'language', id: 'language' },
                                                    ]}
                                                    xAxis={[{ data: language, scaleType: 'band' }]}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Card className="cardWithTotal">
                                            <CardContent>
                                                <Typography variant="h6">Total View Globally</Typography>
                                                <BarChart
                                                    dataset={dataset}
                                                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                                    series={[
                                                        { dataKey: 'USA', label: 'USA', valueFormatter },
                                                        { dataKey: 'AUSTRALIA', label: 'AUSTRALIA', valueFormatter },
                                                        { dataKey: 'UK', label: 'New York', valueFormatter },
                                                        { dataKey: 'INDIA', label: 'INDIA', valueFormatter },
                                                    ]}
                                                    {...chartSetting}
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="engagement"></div>
                    </TabPanel>
                    <TabPanel>
                        <div className="content"></div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="col-md-3 liveCount">
                <div className="title">Real Time</div>
                <div className="liveSubCount mb-3">
                    <Card className="cardWithTotal">
                        <CardContent>
                            <Typography variant="h6">Live Subscriber Count</Typography>
                            <div>
                                <div className="subCountNumber">{subscriberCount.toLocaleString()}</div>
                            </div>
                        </CardContent>
                    </Card>
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
    )
}

export default Analytics;