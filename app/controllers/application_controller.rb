class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

private

def render_not_found_response(not_found)
  render json: { error: not_found.message }, status: :not_found
end

def render_invalid_response(invalid)
  render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

def authorize
  return render json: {error: "Not authorized" }, status: :unauthorized unless session.include?(:user_id)
end

end
