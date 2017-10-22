class MesController < ApplicationController
  before_action :set_me, only: [:show, :edit, :update, :destroy]

  # GET /mes
  # GET /mes.json
  def index
    @mes = Me.all
  end

  # GET /mes/1
  # GET /mes/1.json
  def show
  end

  # GET /mes/new
  def new
    @me = Me.new
  end

  # GET /mes/1/edit
  def edit
  end

  # POST /mes
  # POST /mes.json
  def create
    @me = Me.new(me_params)

    respond_to do |format|
      if @me.save
        format.html { redirect_to @me, notice: 'Me was successfully created.' }
        format.json { render :show, status: :created, location: @me }
      else
        format.html { render :new }
        format.json { render json: @me.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mes/1
  # PATCH/PUT /mes/1.json
  def update
    respond_to do |format|
      if @me.update(me_params)
        format.html { redirect_to @me, notice: 'Me was successfully updated.' }
        format.json { render :show, status: :ok, location: @me }
      else
        format.html { render :edit }
        format.json { render json: @me.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mes/1
  # DELETE /mes/1.json
  def destroy
    @me.destroy
    respond_to do |format|
      format.html { redirect_to mes_url, notice: 'Me was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_me
      @me = Me.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def me_params
      params.require(:me).permit(:name, :title, :about_me, :projects, :skills, :blogs, :meetings)
    end
end
