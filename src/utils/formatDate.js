function formatDate(date) {
    const formattedDate = new Date(date * 1000);
    const day = formattedDate.toLocaleDateString("en-US", { weekday: "long" });
    const dateString = formattedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const dateSun = formattedDate.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' })

    const shortDay = formattedDate.toLocaleDateString("en-US", { weekday: "short" });

    return { day, dateString, dateSun, shortDay }
}

export default formatDate;