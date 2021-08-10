class ArticlesController < ApplicationController
  before_action :update_article, only: %i[update destroy]

  def index
    if params[:limit]
      @articles = Article.offset(params[:offset]).limit(params[:limit])
    else
      @articles = Article.all
    end
    @count = Article.count
    p @count
    render json: @articles
  end

  def count
    @count = Article.count
    render json: @count
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article
    else
      head(:unprocessable_entity)
    end
  end

  def update
    if @article.update(article_params)
      render json: @article
    else
      head(:unprocessable_entity)
    end
  end

  def destroy
    if @article.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def update_article
    @article = Article.find(params[:id])
    render json: { error: 'Cannot find an article' }, status: :unprocessable_entity unless @article
  end

  def article_params
    params.require(:article).permit(
      :ip,
      :title,
      :text,
      :eng_title,
      :eng_text,
      :image_src,
      :created_at,
      :updated_at
    )
  end

end
