import React from "react";
export default function AppBar(_a) {
    var title = _a.title, actions = _a.actions;
    return (React.createElement("div", { className: "flex flex-row pl-8" },
        React.createElement("h1", { className: "text-2xl md:text-3xl lg:text-4xl font-bold" }, title),
        React.createElement("div", { className: "flex-grow" }),
        React.createElement("div", { className: "flex-row hidden lg:flex xl:mr-16" }, actions)));
}
