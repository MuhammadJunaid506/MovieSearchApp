//react imports
import React, { useContext } from "react";

//other modules imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context imports
import UserContext from "../../config/context/user/UserContext";

//importing app layout
import Layout from "../../components/Layout";

//importing views
import Login from "../../views/login";
import Dashboard from "../../views/dashboard";
import Plans from "../../views/plans";
import PlanForm from "../../views/planForm";
import Posts from "../../views/posts";
import PostForm from "../../views/postForm";
import Portfolio from "../../views/portfolio";
import PortfolioForm from "../../views/portfolioForm";
import Orders from "../../views/orders";
import Review from "../../views/review";
import Categories from "../../views/category";
import CategoryForm from "../../views/categoryForm";
import ReviewForm from "../../views/reviewForm";
import Inquiry from "../../views/inquries";

//main function
const AppRouter = () => {
    const routes = [
        {
            title: "Dashboard",
            activetab: "Dashboard",
            link: "/",
            component: <Dashboard />,
        },
        {
            title: "Dashboard",
            activetab: "Dashboard",
            link: "/dashboard",
            component: <Dashboard />,
        },
        {
            title: "Plans",
            activetab: "Plans",
            link: "/plans",
            component: <Plans />,
        },
        {
            title: "Create Plan",
            activetab: "Plans",
            link: "/plans/new",
            component: <PlanForm />,
        },
        {
            title: "Edit Plan",
            activetab: "Plans",
            link: "/plans/update/:id",
            component: <PlanForm />,
        },
        {
            title: "Posts",
            activetab: "Posts",
            link: "/posts",
            component: <Posts />,
        },
        {
            title: "Create Post",
            activetab: "Posts",
            link: "/posts/new",
            component: <PostForm />,
        },
        {
            title: "Update Post",
            activetab: "Posts",
            link: "/posts/update/:id",
            component: <PostForm />,
        },
        {
            title: "Portfolio",
            activetab: "Portfolio",
            link: "/portfolio",
            component: <Portfolio />,
        },
        {
            title: "Create Portfolio",
            activetab: "Portfolio",
            link: "/portfolio/new",
            component: <PortfolioForm />,
        },
        {
            title: "Edit Portfolio",
            activetab: "Portfolio",
            link: "/portfolio/update/:id",
            component: <PortfolioForm />,
        },
        {
            title: "Orders",
            activetab: "Orders",
            link: "/orders",
            component: <Orders />,
        },
        {
            title: "Inquiry",
            activetab: "Inquiry",
            link: "/inquries",
            component: <Inquiry />,
        },
        {
            title: "Reviews",
            activetab: "Reviews",
            link: "/reviews",
            component: <Review />,
        },
        {
            title: "Add Reviews",
            activetab: "Reviews",
            link: "/reviews/new",
            component: <ReviewForm />,
        },
        {
            title: "Update Reviews",
            activetab: "Reviews",
            link: "/reviews/update/:id",
            component: <ReviewForm />,
        },
        {
            title: "Categories",
            activetab: "Categories",
            link: "/categories",
            component: <Categories />,
        },
        {
            title: "Add Category",
            activetab: "Categories",
            link: "/category/new",
            component: <CategoryForm />,
        },
        {
            title: "Update Category",
            activetab: "Categories",
            link: "/category/update/:id",
            component: <CategoryForm />,
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" index element={<Login />} />
                {routes?.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            path={item.link}
                            element={
                                <Layout
                                    title={item.title}
                                    activetab={item.activetab}
                                    padding={item.padding ? item.padding : ""}
                                >
                                    {item.component}
                                </Layout>
                            }
                        />
                    )
                })}

            </Routes>
        </BrowserRouter>
    )

};

export default AppRouter
