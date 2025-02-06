console.log("script.js loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // Initialize Charts
    const userChartCanvas = document.getElementById("userChart");
    if (userChartCanvas) {
        new Chart(userChartCanvas, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "New Registrations",
                        data: [30, 45, 60, 40, 55, 70],
                        backgroundColor: "rgba(85, 173, 255, 0.2)",
                        borderColor: "#55ADFF",
                        borderWidth: 2,
                        fill: true,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Add Small Graphs
    function createSmallGraph(canvasId, label, data, color) {
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            new Chart(canvas, {
                type: "bar",
                data: {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    datasets: [
                        {
                            label: label,
                            data: data,
                            backgroundColor: color,
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }

    createSmallGraph("smallGraph1", "Active Users", [200, 250, 230, 300], "#FFD46B");
    createSmallGraph("smallGraph2", "Monthly Revenue", [5000, 7000, 8000, 6000], "#E15D47");

    // Fix Navigation Click Issues
    function showSection(sectionId) {
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
            section.style.display = "none";
        });

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }

    document.getElementById("overview-link")?.addEventListener("click", function () {
        showSection("overview");
    });

    document.getElementById("user-management-link")?.addEventListener("click", function () {
        showSection("user-management");
    });

    document.getElementById("excel-integration-link")?.addEventListener("click", function () {
        showSection("excel-integration");
    });

    document.getElementById("chatbot-link")?.addEventListener("click", function () {
        showSection("chatbot");
    });

    // Chatbot Functionality (Fixed Duplicate Code)
    document.getElementById("send-btn")?.addEventListener("click", function () {
        let userMessage = document.getElementById("chat-input").value;
        if (userMessage) {
            const messages = document.getElementById("messages");
            messages.innerHTML += `<div>User: ${userMessage}</div>`;
            document.getElementById("chat-input").value = "";

            setTimeout(function () {
                let botReply = "I am not sure how to help with that.";
                if (userMessage.toLowerCase().includes("help")) {
                    botReply = "Sure! How can I assist you today?";
                } else if (userMessage.toLowerCase().includes("hello")) {
                    botReply = "Hi there! How can I help you?";
                }
                messages.innerHTML += `<div>Bot: ${botReply}</div>`;
                messages.scrollTop = messages.scrollHeight;
            }, 1000);
        }
    });

    document.getElementById("chat-input")?.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            document.getElementById("send-btn").click();
        }
    });
});
