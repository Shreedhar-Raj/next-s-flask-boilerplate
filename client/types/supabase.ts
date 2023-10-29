export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            classes: {
                Row: {
                    created_at: string
                    id: number
                    students: string[] | null
                    teachers: string[] | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    students?: string[] | null
                    teachers?: string[] | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    students?: string[] | null
                    teachers?: string[] | null
                }
                Relationships: []
            }
            events: {
                Row: {
                    created_at: string
                    details: string | null
                    eventdate: string | null
                    id: number
                    title: string | null
                }
                Insert: {
                    created_at?: string
                    details?: string | null
                    eventdate?: string | null
                    id?: number
                    title?: string | null
                }
                Update: {
                    created_at?: string
                    details?: string | null
                    eventdate?: string | null
                    id?: number
                    title?: string | null
                }
                Relationships: []
            }
            students: {
                Row: {
                    classes: string[] | null
                    created_at: string
                    id: string
                    username: string
                    xp: number
                }
                Insert: {
                    classes?: string[] | null
                    created_at?: string
                    id: string
                    username?: string
                    xp?: number
                }
                Update: {
                    classes?: string[] | null
                    created_at?: string
                    id?: string
                    username?: string
                    xp?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "students_id_fkey"
                        columns: ["id"]
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            teachers: {
                Row: {
                    created_at: string
                    id: string
                    subjects: string[] | null
                    username: string
                }
                Insert: {
                    created_at?: string
                    id: string
                    subjects?: string[] | null
                    username?: string
                }
                Update: {
                    created_at?: string
                    id?: string
                    subjects?: string[] | null
                    username?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "teachers_id_fkey"
                        columns: ["id"]
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            Topic: "name" | "weightage" | "level"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
