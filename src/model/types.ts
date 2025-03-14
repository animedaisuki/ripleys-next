interface TalentImage {
  talent_id: number;
  caption: string | null;
  sequence: number;
  id: number;
  filename: string;
  title: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

interface Ethnicity {
  name: string;
  id: number;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface TalentType {
  old_id: number;
  status: number;
  first_name: string;
  last_name: string;
  category: number;
  nationality_id: string;
  address1: string;
  address2: string | null;
  suburb: string;
  state: number;
  postcode: string;
  phone_home: string;
  phone_mobile: string;
  phone_work: string;
  email: string | null;
  occupation: string;
  tfn: string;
  meaaid: string;
  super_fund_name: string | null;
  super_membership_number: string | null;
  bank_account_name: string | null;
  bsb: string | null;
  bank_account_number: string | null;
  business_name: string | null;
  abn: string | null;
  notes: string;
  gender: number;
  birth_date?: Date | null;
  ethnicity_id: number;
  eye_colour: string;
  hair_colour: string;
  height: number;
  waist: number;
  bust: number;
  hips: number;
  dress_size: string;
  chest: number;
  shoe: string;
  suit: string;
  suit_length: string | null;
  shirt: string | null;
  inside_leg: number;
  smoker: boolean;
  distinctive_marks: string;
  experience: string;
  showreel: string;
  skills_interests: string;
  artist_type: string;
  date_joined?: Date | null;
  date_expiry?: Date | null;
  created_by: string | null;
  modified_by: string | null;
  id: number;
  slug: string;
  created_at: Date | null;
  updated_at: Date | null;
  intensive_course: string | null;
  collar: string | null;
  talent_image?: TalentImage[];
  ethnicity: Ethnicity;
}

export interface EnquiryFormData {
  name: string;
  email_address: string;
  phone: string;
  enquiry: string;
}

export interface EnquiryType extends EnquiryFormData {
  id?: number;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface ExpAttributesDataType {
  id: number;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface AllExpAttributesType {
  accents: ExpAttributesDataType[];
  languages: ExpAttributesDataType[];
  licenses: ExpAttributesDataType[];
  unions: ExpAttributesDataType[];
}

export interface BlogPostImage {
  blog_post_id: number;
  id: number;
  filename: string;
  title: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface NewsPayload {
  title: string;
  slug: string;
  publish_date?: Date;
  is_enabled: boolean;
  is_featured: boolean;
  author?: string;
  summary: string;
  body: string;
  quote?: string;
  quote_author?: string;
  image_id: number;
  section_id: string;
  id: number;
  created_at?: Date;
  updated_at?: Date;
  blog_post_image_blog_post_image_blog_post_idToblog_post: BlogPostImage[];
}

export interface TalentConfirmationPayload {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  talent_map_customer?: CustomerPayload;
  payment?: PaymentPayload[];
}

export interface CustomerPayload {
  id: number;
  talent_id: number;
  stripe_customer_id: string;
  created_at?: Date;
  updated_at?: Date;
  valid_until?: Date;
}

export interface ProductPayload {
  id: number;
  name: string;
  description?: string;
  price: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface PaymentPayload {
  id: number;
  amount: number;
  product_id: number;
  talent_id: number;
  created_at?: Date;
  updated_at?: Date;
}
