class UserController < ApplicationController

  def show
    user = User.find(params[:id])
    userHoldings = user.users_holdings.all
    return_user_data = {
      user: user,
      holdings: userHoldings
    }
    render json: return_user_data
  end

  def create
    user = User.new(user_params)
    if !user.save
      render json: { error: 'User did not save to db.' }, status: 400
    else
      render json: { user: user }
    end
  end

  def update
    user = User.update(user_params)
    if !user.save
      render json: { error: 'User did not update properly.' }, status: 400
    else
      render json: { user: user }
    end
  end

  def delete
    User.find(params[:id]).destroy
    render json: { message: 'User successfully terminated.' }, status: 200
  end

  private

    def user_params
      params.require(:user).permit(:name, :password, :picture_link, :risk_tolerance)
    end

end
