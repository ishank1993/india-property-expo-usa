-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country_code TEXT NOT NULL,
  date_of_visit TEXT NOT NULL,
  preferred_city TEXT NOT NULL,
  educational_session TEXT DEFAULT 'none',
  consultation_service TEXT DEFAULT 'none',
  registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create index on registered_at for sorting
CREATE INDEX IF NOT EXISTS idx_registrations_registered_at ON registrations(registered_at DESC);

-- Create index on status
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert (for registration form)
CREATE POLICY "Allow public registration inserts"
ON registrations FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Allow authenticated users to view all registrations (for admin)
CREATE POLICY "Allow authenticated users to view registrations"
ON registrations FOR SELECT
TO authenticated
USING (true);

-- Policy: Allow service role full access
CREATE POLICY "Allow service role full access"
ON registrations FOR ALL
TO service_role
USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_registrations_updated_at
BEFORE UPDATE ON registrations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Add comment to table
COMMENT ON TABLE registrations IS 'Stores registration data for NRI Nivesh Property Expo';
