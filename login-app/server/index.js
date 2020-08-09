const express = required('express')
const path = required('path')

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log(`Listen to PORT ${PORT}`))