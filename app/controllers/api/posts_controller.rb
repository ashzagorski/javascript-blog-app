class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render 'index.json.jbuilder'
  end

  def create
    @post = Post.new(
                      title: params[:title],
                      body: params[:body]
                      )

    if @post.save
      render 'index.json.jbuilder'
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end 
end
