function sidebar_open() {
    document.getElementById("sidebar").style.display = "block"; /* Show the sidebar */
    document.getElementById("sidebar").style.width = "250px"; /* Set the width of the sidebar */
}

function sidebar_close() {
    document.getElementById("sidebar").style.width = "0"; /* Set the width of the sidebar to 0 */
    document.getElementById("sidebar").style.display = "none"; /* Hide the sidebar */
}