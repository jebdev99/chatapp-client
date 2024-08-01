import { Box } from "@mui/material"
import { Suspense, lazy } from "react"
import { Outlet } from "react-router-dom"
import CircularLoading from "../components/CircularLoading"

const Header = lazy(() => import("../components/Header"))
export const Layout = () => {
  return (
    <Suspense fallback={<CircularLoading />}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          // backgroundColor: "rgba(200, 200, 100, .5)"
        }}
      >
        <Header />
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Suspense>
  )
}
