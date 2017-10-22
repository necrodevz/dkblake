Types::MeType = GraphQL::ObjectType.define do
  name "Me"
  field :name, types.String
  field :title, types.String
  field :about_me, types.String
end
