# Copyright (C) 2021 SUSE, LLC
#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Lesser General Public
# License as published by the Free Software Foundation; either
# version 2.1 of the License, or (at your option) any later version.
#
from typing import Callable, List

from fastapi import APIRouter, Depends, Request

from bubbles.bubbles import Bubbles
from bubbles.backend.api import jwt_auth_scheme
from bubbles.backend.models.user import UserModel

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/", name="Get list of users", response_model=List[UserModel])
async def get_users(
    request: Request, _: Callable = Depends(jwt_auth_scheme)
) -> List[UserModel]:
    bubbles: Bubbles = request.app.state.bubbles
    assert bubbles.ctrls.rest_api_proxy is not None
    response = bubbles.ctrls.rest_api_proxy.request("GET", "/api/user")
    return [UserModel.parse_obj(user) for user in response]
