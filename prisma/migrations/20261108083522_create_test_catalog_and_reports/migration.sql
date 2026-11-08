-- CreateTable
CREATE TABLE "tests" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "code" VARCHAR(12) NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_reports" (
    "id" TEXT NOT NULL,
    "reportNo" VARCHAR(40) NOT NULL,
    "testId" TEXT NOT NULL,
    "testNameSnapshot" VARCHAR(150) NOT NULL,
    "testCodeSnapshot" VARCHAR(12) NOT NULL,
    "clientName" VARCHAR(200) NOT NULL,
    "address" TEXT NOT NULL,
    "serviceDescription" TEXT NOT NULL,
    "regulation" VARCHAR(200) NOT NULL,
    "studyScope" TEXT NOT NULL,
    "testStartDate" DATE NOT NULL,
    "testEndDate" DATE NOT NULL,
    "finalReportDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "tests"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tests_code_key" ON "tests"("code");

-- CreateIndex
CREATE INDEX "tests_isActive_name_idx" ON "tests"("isActive", "name");

-- CreateIndex
CREATE UNIQUE INDEX "test_reports_reportNo_key" ON "test_reports"("reportNo");

-- CreateIndex
CREATE INDEX "test_reports_testId_idx" ON "test_reports"("testId");

-- CreateIndex
CREATE INDEX "test_reports_clientName_idx" ON "test_reports"("clientName");

-- CreateIndex
CREATE INDEX "test_reports_finalReportDate_idx" ON "test_reports"("finalReportDate");

-- AddForeignKey
ALTER TABLE "test_reports" ADD CONSTRAINT "test_reports_testId_fkey" FOREIGN KEY ("testId") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
