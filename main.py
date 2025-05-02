from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
from typing import List

app = FastAPI()
security = HTTPBasic()

# Pydantic model for a route
class Route(BaseModel):
    id: int
    name: str
    color: str
    text_color: str
    description: str

# Example data
routes = [
    {"id": 1, "name": "Route 1", "color": "#FF5733", "text_color": "#FFFFFF", "description": "This is route 1"},
    {"id": 2, "name": "Route 2", "color": "#33FF57", "text_color": "#000000", "description": "This is route 2"},
]

# Authenticate using hardcoded credentials
def verify_credentials(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = "admin"
    correct_password = "secret"
    if credentials.username != correct_username or credentials.password != correct_password:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

# Route to get all routes
@app.get("/route", response_model=List[Route])
def get_routes(credentials: HTTPBasicCredentials = Depends(verify_credentials)):
    return routes

# Route to get a specific route by ID
@app.get("/route/{route_id}", response_model=Route)
def get_route(route_id: int, credentials: HTTPBasicCredentials = Depends(verify_credentials)):
    route = next((r for r in routes if r["id"] == route_id), None)
    if route is None:
        raise HTTPException(status_code=404, detail=f"Route {route_id} not found")
    return route
